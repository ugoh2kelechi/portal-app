import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { FlightEditComponent } from './flight-edit.component';
import { FlightService } from '../flight.service';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';

describe('FlightEditComponent', () => {
  let component: FlightEditComponent;
  let fixture: ComponentFixture<FlightEditComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
    declarations: [FlightEditComponent],
    imports: [FormsModule, RouterTestingModule],
    providers: [FlightService, provideHttpClient(withInterceptorsFromDi()), provideHttpClientTesting()]
})
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlightEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
