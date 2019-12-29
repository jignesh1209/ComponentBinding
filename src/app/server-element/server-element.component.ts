import { Component, OnInit, Input, 
  ViewEncapsulation,OnChanges, SimpleChange, DoCheck, 
  AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, ViewChild, ElementRef, ContentChild, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ServerElementComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked {
@Input('srvElement')  element: [{ type: string, name: string, content: string }];
@Input() name:string;
@ViewChild('headingName') heading : ElementRef;
@ContentChild('paragraphContent') paragraph : ElementRef;
  constructor() { 
    console.log('Constructor called!');
  }

  ngOnInit() {
    console.log('ngOnInit called!');
  }

  ngOnChanges(changes: SimpleChanges): void {
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //Add '${implements OnChanges}' to the class.
    console.log('ngOnChanges called!');
    console.log(changes);
  }
  /*
  ngOnChanges(changes: SimpleChange) {
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //Add '${implements OnChanges}' to the class.
    
  }*/

  ngDoCheck() {
    //Called every time that the input properties of a component or a directive are checked. Use it to extend change detection by performing a custom check.
    //Add 'implements DoCheck' to the class.
    console.log('ngDoChecked called!');
  }

  ngAfterContentInit(){
    console.log('ngAfterContentInit called!');
    console.log('Text Paragraph -' + this.paragraph.nativeElement.textContent);
  }
  ngAfterContentChecked(){
    console.log('ngAfterContentChecked called!');
  }

  ngAfterViewInit(){
    console.log('ngAfterViewInit called!');
    console.log('Text content -' + this.heading.nativeElement.textContent);
    
  }
  ngAfterViewChecked(){
    console.log('ngAfterViewChecked called!');
  }

}
