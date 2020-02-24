import React from 'react';
import dateFns from 'date-fns';

class Calendar extends React.Component {
  state = {
    currentMonth: new Date(),
    selectedDate: new Date()
  };

renderHeader() {}

renderDays() {}

renderCells() {}

onDateClick = day => {};

nextMonth = () => {};

prevMonth = () => {};

  render() {
    return (
      {this.renderHeader()}
      {this.renderDays()}
      {this.renderCells()}
    );
  }
}

export default Calendar;
