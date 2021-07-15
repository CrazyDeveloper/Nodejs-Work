import React, { Fragment, useEffect, useState } from 'react';
import { Card, CardBody, CardHeader, Button, Form, FormGroup, Label, Input, CustomInput } from 'reactstrap';
import FalconCardHeader from '../../common/FalconCardHeader';
import PasswordResetForm from '../../auth/PasswordResetForm';
import Partners from '../partner/Partners';

const MyProfile = () => {
  return (
    <Fragment>
      <Card className="mb-3">
        <FalconCardHeader title="Personal Info" light={false}></FalconCardHeader>
        <hr />
        <CardBody>
          <FormGroup>
            <div className="row">
              <Label for="userId" className="col-2">Id</Label>
              <span id="userId" className="col-3" >12</span>
              <Label for="userName" className="col-2">UserName</Label>
              <span id="userName" className="col-3" >Admin</span>
            </div>
          </FormGroup>
          <FormGroup>
            <div className="row">
              <Label for="currency" className="col-2">Currency</Label>
              <span id="currency" className="col-3" >USD</span>
              <Label for="siteId" className="col-2">Site Id</Label>
              <span id="siteId" className="col-3" >200</span>
            </div>
          </FormGroup>
          <FormGroup>
            <div className="row">
              <Label for="exampleName" className="col-3">Name</Label>
              <Input type="text" name="name" id="exampleName" placeholder="Name" className="col-8"/>
            </div>
          </FormGroup>
          <FormGroup>
            <div className="row">
              <Label for="exampleEmail" className="col-3">Email</Label>
              <Input type="email" name="email" id="exampleEmail" placeholder="Email" className="col-8"/>
            </div>
          </FormGroup>
          <FormGroup>
            <div className="row">
              <Label for="phone" className="col-3">Phone</Label>
              <Input type="text" name="phone" id="phone" placeholder="Phone" className="col-8" />
            </div>
          </FormGroup>
          <FormGroup>
            <div className="row">
              <Label for="timezone" className="col-3">Timezone</Label>
              <select name="timezone" id="timezone" className="col-8 form-control" >
                <option value="">Select timezone</option>
                <option value="0">UTC + 01:00 </option>
                <option value="1">UTC + 02:00 </option>
                <option value="2">UTC + 03:00 </option>
                <option value="3">UTC + 04:00 </option>
              </select>
            </div>
          </FormGroup>
          <FormGroup>
            <div className="row">
              <Label for="selectOption" className="col-3">
                Theme
              </Label>
              <CustomInput 
                type="radio" 
                name="themeCustomInlineRadio" 
                className="col-3"
                id="lightTheme" 
                label="Light" 
                inline 
              />
              <CustomInput 
                type="radio" 
                name="themeCustomInlineRadio" 
                id="darkTheme" 
                label="Dark" 
                inline 
              />
            </div>
          </FormGroup>
          <hr />
          <Button color="primary" size="md" className="mt-3" >Save</Button>
        </CardBody>
      </Card>
      <Card className="mb-3">
        <FalconCardHeader title="Change Password" light={false}></FalconCardHeader>
        <hr />
        <CardBody>
          <PasswordResetForm />
        </CardBody>
      </Card>
      <Partners />
    </Fragment>
  );
}
export default MyProfile;