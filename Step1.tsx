import React, {FC} from 'react'
import {Field, ErrorMessage} from 'formik'

const Step1: FC = () => {
  return (
    <div className='w-100'>
      <div className='pb-10 pb-lg-15'>
        <h2 className='fw-bolder text-dark'>Basic Details</h2>
      </div>
      <div className='row mb-1 w-100'>
        <div className='col-md-6 fv-row mb-5' >
          <label className='required fs-6 fw-bold form-label mb-2'>Financial Year</label>
          <div className='row fv-row'>
            <div className='col-12'>
              <Field as='select' name='financialYear' className='form-select form-select-solid'>
              <option>Selected</option>
                <option>2018-2019</option>
                <option>2019-2020</option>
                <option>2020-2021</option>
                <option>2021-2022</option>
                <option>2022-2023</option>
                <option>2023-2024</option>
              </Field>
              <div className='text-danger mt-2'>
                <ErrorMessage name='financialYear' />
              </div>
            </div>           
          </div>
        </div>

        <div className='col-md-6 fv-row'>
          <label className='required fs-6 fw-bold form-label mb-2'>Age Category</label>
          <div className='row fv-row'>
            <div className='col-12'>
              <Field as='select' name='ageCategory' className='form-select form-select-solid'>
                <option>below 60</option>
                <option>60 to 80</option>
                <option>80 to 90</option>
                <option>90 & below</option>
                </Field>
              <div className='text-danger mt-2'>
                <ErrorMessage name='ageCategory' />
              </div>
            </div>
          </div>
        </div>

        <div className='col-md-6 fv-row'>
          <label className='required fs-6 fw-bold form-label mb-2'>Regime</label>
          <div className='row fv-row'>
            <div className='col-12'>
              <Field as='select' name='' className='form-select form-select-solid'>
                <option>New Regime</option>
                <option>Old Regime</option>
              </Field>
              <div className='text-danger mt-2'>
                <ErrorMessage name='financialYear' />
              </div>
            </div>           
          </div>
        </div>
         
        <div className='col-md-6 fv-row'>
          <label className='required fs-6 fw-bold form-label mb-2'>House Type</label>
          <div className='row fv-row'>
            <div className='col-12'>
              <Field as='select' name='financialYear' className='form-select form-select-solid'>
                <option>Own</option>
                <option>Rent</option>
                 </Field>
              <div className='text-danger mt-2'>
                <ErrorMessage name='financialYear' />
              </div>
            </div>           
          </div>
        </div>
      </div>
    </div>
  );
};

export {Step1}