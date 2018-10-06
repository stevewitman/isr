import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appSnowDepth]'
})
export class SnowDepthDirective implements OnInit {

  @Input() snowDepth: number;

  depth: Number;
  depthStyle;

  constructor(private el: ElementRef) {
    el.nativeElement.style.background = this.depthStyle;
  }

  ngOnInit() {
    this.depth = this.snowDepth * 8.33;
    this.depthStyle = 'linear-gradient(to top, #ffff8c 0%, #ffff8c ' + this.depth + '%, #E3F2FD ' + this.depth + '%, #E3F2FD 100%';
    this.el.nativeElement.style.background = this.depthStyle;
  }

}
