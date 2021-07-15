
 import React from 'react';
 import {
   Pagination,
   PaginationOpts,
   TableHeader,
   TableBody,
   Filter,
   useDatatableLifecycle,
   shouldTableUpdate
 } from 'react-bs-datatable';
 
 const CustomTable = React.memo(props => {
   const {
     data,
     rowsPerPageOption,
     tableHeaders,
     onChangeFilter,
     onPageNavigate,
     classes,
     onRowsPerPageChange,
     onSortChange,
     tableClass,
     labels,
     filterable,
     filterText,
     rowsPerPage,
     currentPage,
     sortedProp,
     maxPage,
     Components
   } = useDatatableLifecycle(props);
 
   return (
     <>
       <Components.Row className="controlRow__root">
         <Components.Col xs="12">
           <Filter
             classes={classes}
             tableHeaders={tableHeaders}
             placeholder={labels.filterPlaceholder}
             onChangeFilter={onChangeFilter}
             filterText={filterText}
             filterable={filterable}
             components={{
               Adornment: Components.Adornment,
               Button: Components.Button,
               ClearIcon: Components.ClearIcon,
               FormControl: Components.FormControl,
               InputGroup: Components.InputGroup
             }}
           />
         </Components.Col>
       </Components.Row>
       <Components.Row>
         <Components.Col xs="12">
           <Components.Table className={tableClass}>
             <TableHeader
               classes={classes}
               tableHeaders={tableHeaders}
               sortedProp={sortedProp}
               onSortChange={onSortChange}
               cell={{fontSize:'1rem', fontWeight:'bold'}}
               components={{
                 TableHead: Components.TableHead,
                 TableCell: Components.TableCell,
                 TableRow: Components.TableRow
               }}
             />
             <TableBody
               classes={classes}
               tableHeaders={tableHeaders}
               labels={labels}
               data={data}
               components={{
                 TableBody: Components.TableBody,
                 TableCell: Components.TableCell,
                 TableRow: Components.TableRow
               }}
             />
           </Components.Table>
         </Components.Col>
       </Components.Row>
       <Components.Row className="controlRow__root bottom">
          <Components.Col xs={12} md={4} offset={4}>
            <PaginationOpts
              classes={classes}
              labels={labels}
              onRowsPerPageChange={onRowsPerPageChange}
              rowsPerPage={rowsPerPage}
              rowsPerPageOption={rowsPerPageOption}
              components={{
                Form: Components.Form,
                FormGroup: Components.FormGroup,
                FormControl: Components.FormControl
              }}
            />
          </Components.Col>
         <Components.Col xs={12} md={{span: '4', offset: '3'}} className="text-right pull-right">
           <Pagination
             classes={classes}
             data={data}
             rowsPerPage={rowsPerPage}
             currentPage={currentPage}
             onPageNavigate={onPageNavigate}
             labels={labels}
             maxPage={maxPage}
             components={{
               Button: Components.Button,
               ButtonGroup: Components.ButtonGroup
             }}
             className="pull-right"
           />
         </Components.Col>
       </Components.Row>
     </>
   );
 }, shouldTableUpdate);
 

 
 export default CustomTable;