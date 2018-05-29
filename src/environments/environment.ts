// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  apiUrl: 'http://localhost:3200/api',
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


// //TODO make it work right on all deltas
// makeRange(first: number, final: number) {
//   const current = first;
//   const last = final;
//   const delta = 2;
//   let range = [];
//
//   if (current > 1 && current < last-1) {
//     range.push(current);
//     range.push(last);
//     for (let i = 1; i <= ((delta*2)-2)/2; i++) {
//       range.push(current+i);
//       range.push(current-i);
//     }
//     range.sort((a, b) => (a - b));
//   } else if (current > (last - delta*2) || current > last-1) {
//     const arr = this.makeArray(this.totalPages);
//     range = arr.slice(arr.length - delta*2);
//   } else {
//     const arr = this.makeArray(delta*2-1);
//     arr.push(last);
//     range = arr;
//     range.sort((a, b) => (a - b));
//   }
//
//   if (last - delta*2 <= current) {
//     range.unshift(last - delta*2 - 1)
//   } else {
//      range.splice(range.length-1, 0, "...");
//   }
//
//   return range;
// }
