import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProvinciasComponent } from './provincias.component';
import { Component,OnInit,ViewChild } from '@angular/core';
import { ProvinciasService } from '../../services/provincias.service';

describe('ProvinciasComponent', () => {
  let component: ProvinciasComponent;
  let fixture: ComponentFixture<ProvinciasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProvinciasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProvinciasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
