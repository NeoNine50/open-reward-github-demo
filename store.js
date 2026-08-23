// store.js - Complete LocalStorage Database Mirror
const DB = {
  get(key) { return JSON.parse(localStorage.getItem(key)) || []; },
  set(key, val) { localStorage.setItem(key, JSON.stringify(val)); },
  init() {
    if (!localStorage.getItem('init')) {
      this.set('users', [{ id: 0, name: '-', nbr: 0, fame: 0, time_created: new Date().toISOString() }]); // Default user 0
      this.set('products', []);
      this.set('user_products', []); // Composite key: ProductID + UserID
      this.set('transfers', []);
      this.set('classes', [
        {
          id: 1,
          name: "Default",
          suggestedGateway: 0,
          resabundance: 1,
          beneficiaries: 1,
          producers: 1,
          conssubben: 0,
          ccs: 1,
          consobjben: 0,
          cco: 1,
          envben: 0,
          ceb: 1,
          humanben: 0,
          chb: 1,
          time_created: new Date().toLocaleString()
        }
      ]);
      this.set('init', true);
    }
  }
};
DB.init();
