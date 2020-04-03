import { Component, OnInit, ViewEncapsulation, Input, ViewChild, ElementRef } from '@angular/core';

import './../../../../node_modules/@fortawesome/fontawesome-free/css/fontawesome.min.css';
import './../../../../node_modules/@fortawesome/fontawesome-free/css/all.min.css';

@Component({
	encapsulation: ViewEncapsulation.None,
	selector: 'grid-list-view',
	templateUrl: './grid-list-view.component.html',
	styleUrls: ['./grid-list-view.component.css']
})
export class GridListViewComponent implements OnInit {

	@Input() ngStyle: { [key: string]: string; }

	@Input() data: string;

	@ViewChild('glv', {static: false}) el: ElementRef;

		constructor() { }

		ngOnInit() {
			var elements: any = document.getElementsByClassName("grid--list--element");
			var i: number;

			function listView() {
				for (i = 0; i < elements.length; i++) {
					elements[i].style.width = "100%";
				}
			}

			function gridView() {
				for (i = 0; i < elements.length; i++) {
					elements[i].style.width = "50%";
				}
			}

			function gridViewMax() {
				for (i = 0; i < elements.length; i++) {
					elements[i].style.width = "33.33%";
				}
			}

			var button = document.getElementsByClassName("button");

			button[0].addEventListener("click", function(){
				listView();
			});

			button[1].addEventListener("click", function(){
				gridView();
			});

			button[2].addEventListener("click", function(){
				gridViewMax();
			});

			var container = document.getElementById("grid--list--button");
			var btns = container.getElementsByClassName("button");
			for (i = 0; i < btns.length; i++) {
				btns[i].addEventListener("click", function() {
					var current = document.getElementsByClassName("active");
					current[0].className = current[0].className.replace(" active", "");
					this.className += " active";
				});
			}
		}

}
