import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appSnowDepth]'
})
export class SnowDepthDirective implements OnInit {

  @Input() snowDepth: string;

  depth;
  depthStyle;

  constructor(private el: ElementRef) {
    el.nativeElement.style.background = this.depthStyle;
  }

  ngOnInit() {
    this.depth = parseInt(this.snowDepth, 10) * 8.33;
    this.depthStyle = 'linear-gradient(to top, #FFF 0%, #FFF ' + this.depth + '%, #E3F2FD ' + this.depth + '%, #E3F2FD 100%';
    this.el.nativeElement.style.background = this.depthStyle;
  }

}
