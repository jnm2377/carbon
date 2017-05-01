import React from 'react';
import { action, storiesOf } from '@kadira/storybook';
import RadioButtonGroup from '../../components/RadioButtonGroup';
import RadioButton from '../../components/RadioButton';
import FormGroup from '../../components/FormGroup';

const radioProps = {
  className: 'some-class',
};

storiesOf('RadioButtonGroup', module)
  .addWithInfo(
    '',
    `
       The example below shows a Radio Button Group component with a default selected Radio Button.
       Although you can set the checked prop on the Radio Button, when using the Radio Button component
       as a child of the Radio Button Group, either set the defaultSelected or valueSelected which will
       automatically set the selected prop on the corresponding Radio Button component.

       Use defaultSelected when you want a radio button to be selected initially, but don't need to set it
       at a later time. If you do need to set it dynamically at a later time, then use the valueSelected property instead.
    `,
    () => (
      <FormGroup legendText="Radio Group">
        <RadioButtonGroup
          onChange={action('onChange')}
          name="radio-button-group"
          defaultSelected="default-selected"
          legend="Group Legend"
        >
          <RadioButton
            value="standard"
            id="radio-1"
            labelText="Standard Radio Button"
            {...radioProps}
          />
          <RadioButton
            value="default-selected"
            labelText="Default Selected Radio Button"
            id="radio-2"
            {...radioProps}
          />
          <RadioButton
            value="disabled"
            labelText="Disabled Radio Button"
            id="radio-3"
            disabled
            {...radioProps}
          />
        </RadioButtonGroup>
      </FormGroup>
    ),
  );
