export class Site {
  title: string = '';
  searchUrl: string = '';
  icon: string = '';

   constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}