import { Component, EventEmitter, Output } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";

@Component({
  selector: "app-form",
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: "./form.component.html",
  styleUrl: "./form.component.scss",
})
export class FormComponent {
  @Output() enter: EventEmitter<string> = new EventEmitter<string>();

  // TODO 1: add form group with controls for search and checkbox
  // TODO 2: add validators to search: cannot be empty, length should be greater than 3 and it should contain at least 2 words

  // TODO: question - how to dynamically add more inputs to the form?

  // TODO 3: only allow submit if search field has a valid value and checkbox is selected
  onSubmit(event: Event) {
    event.preventDefault();
  }
}

// TODO: implement
// export function customValidator(): ValidatorFn {
//
// }
