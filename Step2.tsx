import React, {FC} from 'react'
import {ErrorMessage, Field} from 'formik'

const Step2: FC = () => {
  return (
    <div className='w-100'>
      <div className='pb-10 pb-lg-15'>
        <h2 className='fw-bolder text-dark'>Income Details</h2>
      </div>
      
      <div className='row mb-1 w-100'>
        <div className='col-md-6 fv-row mb-5' >
          <label className='required fs-6 fw-bold form-label mb-2'>Employment Type</label>
          <div className='row fv-row'>
            <div className='col-12'>
              <Field as='select' name='employmentType' className='form-select form-select-solid'>

                <option>Selected</option>
                <option>Salarid</option>
                <option></option>
                <option></option>
                <option></option>
                <option></option>
              </Field>
              <div className='text-danger mt-2'>
                <ErrorMessage name='employmentType' />
              </div>
            </div>           
          </div>
        </div>

        <div className='col-md-6 fv-row mb-5' >
          <label className='required fs-6 fw-bold form-label mb-2'>Salary Type</label>
          <div className='row fv-row'>
            <div className='col-12'>
              <Field as='select' name='salaryType' className='form-select form-select-solid'>
                <option>Selected</option>
                <option>Montly</option>
                <option></option>
                <option></option>
                </Field>
              <div className='text-danger mt-2'>
                <ErrorMessage name='salaryType' />
              </div>
            </div>
          </div>
        </div>

        <div className='col-md-6 fv-row mb-5'>
  <label className='required fs-6 fw-bold form-label mb-2'>Gross Salary Income</label>
  <div className='row fv-row'>
    <div className='col-12'>
    <Field type='text' name='grossSalaryIncome' className='form-control' />
      <div className='text-danger mt-2'>
        <ErrorMessage name='grossSalaryIncome' />
      </div>
    </div>           
  </div>
</div>

<div className='col-md-6 fv-row mb-5'>
  <label className='required fs-6 fw-bold form-label mb-2'>Income From Rentals</label>
  <div className='row fv-row'>
    <div className='col-12'>
      <Field type='text' name='incomeFromRentals' className='form-control' />
      <div className='text-danger mt-2'>
        <ErrorMessage name='incomeFromRentals' />
      </div>
    </div>           
  </div>
</div>

        <div className='col-md-6 fv-row'>
          <label className='required fs-6 fw-bold form-label mb-2'>Extra Income</label>
          <div className='row fv-row'>
            <div className='col-12'>
            <Field type='text' name='extraIncome' className='form-control' />
      <div className='text-danger mt-2'>
        <ErrorMessage name='extraIncome' />
              </div>
            </div>           
          </div>
        </div>

        <div className='col-md-6 fv-row'>
          <label className='required fs-6 fw-bold form-label mb-2'>Allowance</label>
          <div className='row fv-row'>
            <div className='col-12'>
            <Field type='text' name='allowance' className='form-control' />
      <div className='text-danger mt-2'>
        <ErrorMessage name='allowance' />
              </div>
            </div>           
          </div>
        </div>
        </div>
        </div>
   );
};

export {Step2}