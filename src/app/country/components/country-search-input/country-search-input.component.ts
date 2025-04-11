import {Component, effect, input, output, signal} from '@angular/core';

@Component({
  selector: 'country-search-input',
  imports: [],
  templateUrl: './country-search-input.component.html',
})
export class SearchInputComponent {
  placeholder = input('Buscar')
  value = output<string>();
  inputValue = signal<string>('');

  debounceEffect = effect((onCleanup) => {
    const value = this.inputValue();

    const timeout = setTimeout(() => {
      this.value.emit(value);
    }, 500);

    onCleanup(() => {
      clearTimeout(timeout);
    });
  });
}
