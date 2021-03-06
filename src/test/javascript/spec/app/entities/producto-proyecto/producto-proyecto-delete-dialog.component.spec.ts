/* tslint:disable max-line-length */
import { ComponentFixture, TestBed, inject, fakeAsync, tick } from '@angular/core/testing';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable, of } from 'rxjs';
import { JhiEventManager } from 'ng-jhipster';

import { CiecytTestModule } from '../../../test.module';
import { ProductoProyectoDeleteDialogComponent } from 'app/entities/producto-proyecto/producto-proyecto-delete-dialog.component';
import { ProductoProyectoService } from 'app/entities/producto-proyecto/producto-proyecto.service';

describe('Component Tests', () => {
  describe('ProductoProyecto Management Delete Component', () => {
    let comp: ProductoProyectoDeleteDialogComponent;
    let fixture: ComponentFixture<ProductoProyectoDeleteDialogComponent>;
    let service: ProductoProyectoService;
    let mockEventManager: any;
    let mockActiveModal: any;

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [CiecytTestModule],
        declarations: [ProductoProyectoDeleteDialogComponent]
      })
        .overrideTemplate(ProductoProyectoDeleteDialogComponent, '')
        .compileComponents();
      fixture = TestBed.createComponent(ProductoProyectoDeleteDialogComponent);
      comp = fixture.componentInstance;
      service = fixture.debugElement.injector.get(ProductoProyectoService);
      mockEventManager = fixture.debugElement.injector.get(JhiEventManager);
      mockActiveModal = fixture.debugElement.injector.get(NgbActiveModal);
    });

    describe('confirmDelete', () => {
      it('Should call delete service on confirmDelete', inject(
        [],
        fakeAsync(() => {
          // GIVEN
          spyOn(service, 'delete').and.returnValue(of({}));

          // WHEN
          comp.confirmDelete(123);
          tick();

          // THEN
          expect(service.delete).toHaveBeenCalledWith(123);
          expect(mockActiveModal.dismissSpy).toHaveBeenCalled();
          expect(mockEventManager.broadcastSpy).toHaveBeenCalled();
        })
      ));
    });
  });
});
