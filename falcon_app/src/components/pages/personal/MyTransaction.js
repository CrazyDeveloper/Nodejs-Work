import React, { Fragment, useEffect, useState } from 'react';
import { Card, CardBody, Button, InputGroup, CustomInput } from 'reactstrap';

import { toast } from 'react-toastify';
import FalconCardHeader from '../../common/FalconCardHeader';
import ButtonIcon from '../../common/ButtonIcon';
import loadable from '@loadable/component';

const PurchasesTable = loadable(() => import('../PurchasesTable'));
const MyTransaction = () => {
  // State
  const [isSelected, setIsSelected] = useState(false);
  useEffect(() => {
    toast(
      <Fragment>
        This page is  <strong>My Transactions</strong>!<br />
      </Fragment>
    );
  }, []);

  return (
    <Fragment>
      <Card className="mb-3">
        <FalconCardHeader title="Recent Purchases" light={false}>
          {isSelected ? (
            <InputGroup size="sm" className="input-group input-group-sm">
              <CustomInput type="select" id="bulk-select">
                <option>Bulk actions</option>
                <option value="Refund">Refund</option>
                <option value="Delete">Delete</option>
                <option value="Archive">Archive</option>
              </CustomInput>
              <Button color="falcon-default" size="sm" className="ml-2">
                Apply
              </Button>
            </InputGroup>
          ) : (
            <Fragment>
              <ButtonIcon icon="plus" transform="shrink-3 down-2" color="falcon-default" size="sm">
                New
              </ButtonIcon>
              <ButtonIcon icon="filter" transform="shrink-3 down-2" color="falcon-default" size="sm" className="mx-2">
                Filter
              </ButtonIcon>
              <ButtonIcon icon="external-link-alt" transform="shrink-3 down-2" color="falcon-default" size="sm">
                Export
              </ButtonIcon>
            </Fragment>
          )}
        </FalconCardHeader>
        <CardBody className="p-0">
          <PurchasesTable setIsSelected={setIsSelected} />
        </CardBody>
      </Card>
    </Fragment>
  );
};

export default MyTransaction;
