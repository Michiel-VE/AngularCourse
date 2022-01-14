import {AfterViewInit, Component, ContentChild, ElementRef, Input, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
})
export class ServerElementComponent implements OnInit, AfterViewInit {
  @Input('srvElement') element: {type: string, name: string, content: string};
  @ContentChild('contentParagraph', {static: true}) paragraph: ElementRef;

  constructor() { }

  ngOnInit(): void {
    console.log('text is ' + this.paragraph.nativeElement.textContent);
  }

  ngAfterViewInit() {
    console.log('text is ' + this.paragraph.nativeElement.textContent);
  }

}
