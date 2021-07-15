import React, { Fragment, useEffect, useState } from 'react';
import { Card, CardBody, CardHeader, Button, InputGroup, CustomInput,Table } from 'reactstrap';
import Datatable from 'react-bs-datatable';
import CustomTable from './customTable';
const header = [
  { title: 'Username', prop: 'username' },
  { title: 'Name', prop: 'realname' },
  { title: 'Location', prop: 'location' }
];

const body = Array.from(new Array(57), () => {
  const rd = (Math.random() * 10).toFixed(1);

  if (rd > 0.5) {
    return {
      username: 'i-am-billy',
      realname: `Billy ${rd}`,
      location: 'Mars'
    };
  }

  return {
    username: 'john-nhoj',
    realname: `John ${rd}`,
    location: 'Saturn'
  };
});

const customLabels = {
  first: '<<',
  last: '>>',
  prev: '<',
  next: '>',
  show: 'Display',
  entries: 'rows',
  noResults: 'There are no data to be displayed'
};
const Partners = () => {
  return (
    <Fragment>
      <Card className="mb-3">
        <CardHeader title="Recent Purchases" light={false} style={{fontSize: '20px',fontWeight:'bold'}}>
          Recent Purchases
        </CardHeader>
        <CardBody className="pt-0 pb-0 mb-3">
          <CustomTable
            tableHeaders={header}
            tableBody={body}
            rowsPerPage={5}
            rowsPerPageOption={[5, 10, 15, 20]}
            initialSort={{ prop: 'username', isAscending: true }}
            labels={customLabels}
          />
        </CardBody>
      </Card>
    </Fragment>
  );
}
export default Partners;