import { Directive, ElementRef ,HostListener} from '@angular/core';

@Directive({
  selector: '[RedColor]'
})
export class RedColorDirective {

  constructor(element: ElementRef) { 
  	element.nativeElement.style.color = "Red";
  }

  @HostListener('click') dosomet(){
  	alert('it clicksssss');
  }
  @HostListener('mouseenter') dosomett(){
  	console.log('mouse enter');
  }
   @HostListener('mouseleave') dosomettt(){
  	console.log('mouse leave');
  }

 @HostListener('mousemove') dosometttt(){
  	console.log('mouse move');
  }


}
