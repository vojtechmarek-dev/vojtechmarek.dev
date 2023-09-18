declare global {
    interface Date {
      addDays(days: number): Date;
      subtractDays(days: number): Date;
      equals(other: Date): boolean;
      getWeekNumber(): number;
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

  Date.prototype.getWeekNumber = function() {
    const date = new Date(this.valueOf());
    const yearStart = new Date(Date.UTC(date.getUTCFullYear(), 0, 1));
    const weekNumber = Math.ceil(((date.getTime() - yearStart.getTime()) / 86400000 + 1) / 7);
    return weekNumber;
  };
  
  export {};
