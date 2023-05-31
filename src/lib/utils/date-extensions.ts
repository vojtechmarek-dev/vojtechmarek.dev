declare global {
    interface Date {
      addDays(days: number): Date;
      subtractDays(days: number): Date;
      equals(other: Date): boolean;
    }
  }
  
  Date.prototype.addDays = function(days) {
    const date = new Date(this.valueOf());
    date.setDate(date.getDate() + days);
    return date;
  };
  
  Date.prototype.subtractDays = function(days) {
    const date = new Date(this.valueOf());
    date.setDate(date.getDate() - days);
    return date;
  };
  
  Date.prototype.equals = function(other) {
    return this.valueOf() === other.valueOf();
  };
  
  export {};
