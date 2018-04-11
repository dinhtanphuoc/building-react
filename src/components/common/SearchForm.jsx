import React, { Component } from 'react';
export default class SearchForm extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-lg-12 col-md-12">
          <div className="widget">
            <div className="widget-header">
              <div className="title">
                <i className="fa fa-search"></i> Search
              </div>
            </div>
            <div className="widget-body dark no-padding-bottom">
              <form className="form-horizontal no-margin">
                <div className="form-group">
                  <label htmlFor="userName" className="col-sm-2 control-label">사업진행상태</label>
                  <div className="col-sm-10">
                    <div className="btn-group" data-toggle="buttons">
                      <label className="btn btn-default btn-sm">
                        <input type="checkbox" /> 보안성검토
                      </label>
                      <label className="btn btn-default btn-sm">
                        <input type="checkbox" /> 제안요청
                      </label>
                      <label className="btn btn-default btn-sm">
                        <input type="checkbox" /> 업체선정
                      </label>
                      <label className="btn btn-default btn-sm">
                        <input type="checkbox" /> 사업진행중
                      </label>
                      <label className="btn btn-default btn-sm">
                        <input type="checkbox" /> 보안사업성검토
                      </label>
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="emailId" className="col-sm-2 control-label">날짜검색</label>
                  <div className="col-sm-10">
                    <div className="row">
                      <div className="col-px-160">
                        <select id="DateOfBirthMonth" className="form-control">
                          <option>
                            전체
                          </option>
                          <option value="1">
                            시작일
                          </option>
                          <option value="2">
                            종료일
                          </option>
                        </select>
                      </div>
                    <div className="col-px-140 no-padding">
                      <div className="input-group">
                        <input className="form-control date-picker" id="id-date-picker-1" type="text" data-date-format="yyyy-mm-dd" />
                        <span className="input-group-addon">
                          <i className="fa fa-calendar"></i>
                        </span>
                      </div>
                    </div>
                    <div className="col-px-20 no-padding center-align-text">~</div>
                      <div className="col-px-140 no-padding">
                        <div className="input-group">
                          <input className="form-control date-picker" id="id-date-picker-1" type="text" data-date-format="yyyy-mm-dd" />
                          <span className="input-group-addon">
                            <i className="fa fa-calendar"></i>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="pwd" className="col-sm-2 control-label">키워드검색</label>
                  <div className="col-sm-10">
                    <input type="text" className="form-control" id="" placeholder="사업명, 사업관리자, 수행관리자" />
                  </div>
                </div>
                <div className="form-group">
                  <div className="col-sm-offset-2 col-sm-10">
                    <button type="submit" className="btn btn-primary btn-sm"><i className="fa fa-search"></i>  검색</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}