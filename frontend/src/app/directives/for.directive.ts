import { Directive, Input, ViewContainerRef, TemplateRef, OnChanges } from '@angular/core';

@Directive({
  selector: '[myFor]'
})
export class ForDirective implements OnChanges {
@Input("myForEm") numbers: number[];

  constructor(
    private container: ViewContainerRef,
    private template: TemplateRef<any>
  ) { }
ngOnChanges(): void{
  for (let number of this.numbers){
    this.container.createEmbeddedView(
      this.template, {$implicit : number});
  }

}
}
