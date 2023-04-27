// import { Component } from "@angular/core";
// import { Observable } from "rxjs";
// import { map } from "rxjs/operators";
// const statesWithFlags: {name: string, flag: string}[] = [
//     {'name': 'Alabama', 'flag': '5/5c/Flag_of_Alabama.svg/45px-Flag_of_Alabama.svg.png'},
//     {'name': 'Alaska', 'flag': 'e/e6/Flag_of_Alaska.svg/43px-Flag_of_Alaska.svg.png'},
//     {'name': 'Arizona', 'flag': '9/9d/Flag_of_Arizona.svg/45px-Flag_of_Arizona.svg.png'},
//     {'name': 'Arkansas', 'flag': '9/9d/Flag_of_Arkansas.svg/45px-Flag_of_Arkansas.svg.png'},
//     {'name': 'California', 'flag': '0/01/Flag_of_California.svg/45px-Flag_of_California.svg.png'},
//     {'name': 'Colorado', 'flag': '4/46/Flag_of_Colorado.svg/45px-Flag_of_Colorado.svg.png'},
//     {'name': 'Connecticut', 'flag': '9/96/Flag_of_Connecticut.svg/39px-Flag_of_Connecticut.svg.png'},
//     {'name': 'Delaware', 'flag': 'c/c6/Flag_of_Delaware.svg/45px-Flag_of_Delaware.svg.png'},
//     {'name': 'Florida', 'flag': 'f/f7/Flag_of_Florida.svg/45px-Flag_of_Florida.svg.png'},
//     {'name': 'Georgia','flag': '5/54/Flag_of_Georgia_%28U.S._state%29.svg/46px-Flag_of_Georgia_%28U.S._state%29.svg.png'}]
// @Component({
//     selector: 'ngbd-typeahead-template',
//     templateUrl: './typeahead-template.html',
//     styles: [`.form-control { width: 300px; }`]
//   })
//   export class NgbdTypeaheadTemplate {
//     public model: any;
  
//     search = (text$: Observable<string>) =>
//       text$.pipe(
//         debounceTime(200),
//         map((term: string) => term === '' ? []
//           : statesWithFlags.filter(v => v.name.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 10))
//       )
  
//     formatter = (x: {name: string}) => x.name;
  
//   }


  