// make sure to use spaces instead of tabs if editing this, otherwise the printed
// text to the "well" will be formatted really strangely.
const createCheckbox = item => `
        <formGroup className="row">
          <h4>${item.fieldName}</h4>\
        ${item.fieldData.split(";").map(data => `
          <Checkbox
            // inline allows you to render the checkbox inline with other checkboxes
            inline
            name="${data}"
            onChange={this.handleChange}>
            <p>${data}</p>
          </Checkbox>`)}
        </formGroup>`;

export default createCheckbox;