import React, { Fragment } from 'react'

function TestPage() {

    const numsOnly = async (e) =>{
        let charCode = (e.which) ? e.which : e.keyCode;
        if(charCode < 48 || charCode > 57){
            e.preventDefault();
            return false;
        }
        return true;
    }

    const onlyNumbers = async (e) => {
        const elInput = e.target;
        // Get start of selection (caret offset when typing)
        //const nSelStart = elInput.selectionStart;
        // Get last typed character (modify for your own needs)
        //const sLastTyped = elInput.value.substr(nSelStart-1, 1);
        // if(!(['0','1','2','3','4','5','6'].includes(sLastTyped))){
        //     e.preventDefault();
            
        // console.log('Last typed character:', sLastTyped);
            elInput.value = elInput.value?.replace(/[^0-9]/g,'')?.trim();
            return numsOnly(e);
        //}
    };
    
    return (
        <Fragment>
            <div>
                <div className='all-center' style={{marginTop:'5rem'}}>
                    <h3 style={{marginBottom:'2rem'}}>Welcome To The Test Page</h3>
                    <p>This page is used for testing app components.</p>
                </div>
                <div className='page-content'>
                    <div className='input-test'>
                        <div className="form-control">
                            <label htmlFor="number-input">Number Only Inputss</label>
                            <input id="number-input"
                                    name="number"
                                    placeholder="Takes only numbers"
                                    onInput={onlyNumbers}
                                    onKeyDown={numsOnly}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default TestPage
