import {Component} from '@angular/core';


@Component ({
  selector: 'app-modal',
  template: `
    <div (click)="onContainerClicked($event)" class="modal fade" tabindex="-1" [ngClass]="{'in': visibleAnimate}"
         [ngStyle]="{'display': visible ? 'block' : 'none', 'opacity': visibleAnimate ? 1 : 0}">
      <div class="modal-dialog" style="margin-top:100px">
        <div class="modal-content">
          <div class="modal-header">
            <ng-content select=".app-modal-header"></ng-content>
          </div>
          <div class="modal-body">
            <ng-content select=".app-modal-body"></ng-content>
          </div>
          <div class="modal-footer">
            <ng-content select=".app-modal-footer"></ng-content>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .modal {
      background: rgba(0,0,0,0.6);
    }
  `]
})
export class ModalComponent {

  public visible = false;
  private visibleAnimate = false;

  constructor() {}

  public show(): void {
    this.visible = true;
    this.visibleAnimate = true
    //setTimeout(() => this.visibleAnimate = true, 100);
  }

  public hide(): void {
    this.visibleAnimate = false;
    setTimeout(() => this.visible = false, 300);
  }

  // public autoHide(): void {
  //   setTimeout(() => this.hide(), 6000);
  // }

  public longAutoHide(): void {
    setTimeout(() => this.hide(), 20000);
  }

  public onContainerClicked(event: MouseEvent): void {
    if ((<HTMLElement>event.target).classList.contains('modal')) {
      this.hide();
    }
  }

  public inStock(selectedProduct): boolean {
    if (selectedProduct.count != 0)
      return true;

    else
      return false;
  }

  public updateCount(selectedProduct, modal): void {
    selectedProduct.count--;
    modal.show();
    modal.autoHide();
  }

  public showMenu(selectedProduct, modal1, modal2): void {
    if (this.inStock(selectedProduct)){
      modal1.show();
      modal1.longAutoHide()
    }
    else {
      modal2.show();
      modal2.longAutoHide();
    }
  }
}
