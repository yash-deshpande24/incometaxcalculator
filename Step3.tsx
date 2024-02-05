import React, {FC} from 'react'
import {Field, ErrorMessage} from 'formik'

const Step3: FC = () => {
  return (
    <div className='w-100'>
    <div className='pb-10 pb-lg-15'>
      <h2 className='fw-bolder text-dark'>Exemption</h2>
    </div>
    
    <div className='row mb-1 w-100'>
        <div className='col-md-6 fv-row mb-5' >
          <label className='required fs-6 fw-bold form-label mb-2'>Fix Deposit</label>
          <div className='row fv-row'>
            <div className='col-12'>
            <Field type='text' name='fixDeposit' className='form-control' />
      <div className='text-danger mt-2'>
        <ErrorMessage name='fixDeposit' />
      </div> 
            </div>           
          </div>
        </div>

        <div className='col-md-6 fv-row'>
          <label className='required fs-6 fw-bold form-label mb-2'>pdf Healt Insurance</label>
          <div className='row fv-row'>
            <div className='col-12'>
            <Field type='text' name='pdfHealtInsurance' className='form-control' />
      <div className='text-danger mt-2'>
        <ErrorMessage name='pdfHealtInsurance' />
      </div>
            </div>
          </div>
        </div>

        <div className='col-md-6 fv-row'>
  <label className='required fs-6 fw-bold form-label mb-2'>Nps Investment</label>
  <div className='row fv-row'>
    <div className='col-12'>
    <Field type='text' name='npsInvestment' className='form-control' />
      <div className='text-danger mt-2'>
        <ErrorMessage name='npsInvestment' />
      </div>
    </div>           
  </div>
</div>

<div className='col-md-6 fv-row'>
  <label className='required fs-6 fw-bold form-label mb-2'>Interest on Loan</label>
  <div className='row fv-row'>
    <div className='col-12'>
      <Field type='text' name='interestOnLoan' className='form-control' />
      <div className='text-danger mt-2'>
        <ErrorMessage name='interestOnLoan' />
      </div>
    </div>
    </div>
    </div>

    <div className='col-md-6 fv-row '>
  <label className='required fs-6 fw-bold form-label mb-2'>TDX</label>
  <div className='row fv-row'>
    <div className='col-12'>
      <Field type='text' name='tdx' className='form-control' />
      <div className='text-danger mt-2'>
        <ErrorMessage name='tdx' />
      </div>
    </div>
    </div>
    </div>

    </div>
  </div>
  );
};

export {Step3}