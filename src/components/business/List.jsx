import React, { Component } from 'react';
import { Paging } from '../common';

export default class List extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-lg-12 col-md-12">
          <div className="widget">
            <div className="widget-header">
              <div className="title">
                총 N 건 <span className="normal-title">( 1 / N 페이지 )</span>
              </div>
              <span className="tools">
                <div className="btn-group">
                  <button type="button" className="btn btn-dark btn-sm"><i className="fa fa-plus"></i> 등록</button>
                </div>
              </span>
            </div>
            <div className="widget-body">
              <table className="table table-responsive table-striped table-bordered table-hover no-margin">
                <thead>
                  <tr>
                    <th>
                      사업명
                    </th>
                    <th>
                      사업진행단계
                    </th>
                    <th style={{width: 60}}>
                      진척율
                    </th>
                    <th style={{width: 100}}>
                      시작일 <i className="fa fa-sort-down"></i>
                    </th>
                    <th style={{width: 100}}>
                      종료일
                    </th>
                    <th style={{width: 100}}>
                      사업관리자
                    </th>
                    <th style={{width: 100}}>
                      수행관리자
                    </th>
                    <th style={{width: 80}}>
                      참여회사
                    </th>
                    <th style={{width: 80}}>
                      참여직원
                    </th>
                    <th style={{width: 80}}>
                      보안서약서
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <a href="#/">MIS</a>
                    </td>
                    <td>
                      보안성검토
                    </td>
                    <td>
                      0%
                    </td>
                    <td>
                      YYYY.MM.DD
                    </td>
                    <td>
                      YYYY.MM.DD
                    </td>
                    <td>
                      Kim. BC
                    </td>
                    <td>
                      Kim. BC
                    </td>
                    <td>
                      2
                    </td>
                    <td>
                      30
                    </td>
                    <td>
                      29 / 30
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <a href="#/">Groupware</a>
                    </td>
                    <td>
                      제안요청
                    </td>
                    <td>
                      5%
                    </td>
                    <td>
                      YYYY.MM.DD
                    </td>
                    <td>
                      YYYY.MM.DD
                    </td>
                    <td>
                      Choi. JH
                    </td>
                    <td>
                      Choi. JH
                    </td>
                    <td>
                      1
                    </td>
                    <td>
                      15
                    </td>
                    <td>
                      15 / 15
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <a href="#/">KMS1</a>
                    </td>
                    <td>
                      업체선정
                    </td>
                    <td>
                      45%
                    </td>
                    <td>
                      YYYY.MM.DD
                    </td>
                    <td>
                      YYYY.MM.DD
                    </td>
                    <td>
                      Park. HG
                    </td>
                    <td>
                      Park. HG
                    </td>
                    <td>
                      1
                    </td>
                    <td>
                      9
                    </td>
                    <td>
                      3 / 9
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <a href="#/">CMS</a>
                    </td>
                    <td>
                      사업진행중
                    </td>
                    <td>
                      20%
                    </td>
                    <td>
                      YYYY.MM.DD
                    </td>
                    <td>
                      YYYY.MM.DD
                    </td>
                    <td>
                      Kim. HS
                    </td>
                    <td>
                      Kim. HS
                    </td>
                    <td>
                      3
                    </td>
                    <td>
                      14
                    </td>
                    <td>
                      14 / 14
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <a href="#/">EPR1</a>
                    </td>
                    <td>
                      보안적합성검토
                    </td>
                    <td>
                      90%
                    </td>
                    <td>
                      YYYY.MM.DD
                    </td>
                    <td>
                      YYYY.MM.DD
                    </td>
                    <td>
                      Nam. UY
                    </td>
                    <td>
                      Nam. UY
                    </td>
                    <td>
                      2
                    </td>
                    <td>
                      10
                    </td>
                    <td>
                      7 / 10
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <a href="#/">KMS2</a>
                    </td>
                    <td>
                      업체선정
                    </td>
                    <td>
                      45%
                    </td>
                    <td>
                      YYYY.MM.DD
                    </td>
                    <td>
                      YYYY.MM.DD
                    </td>
                    <td>
                      Park. HG
                    </td>
                    <td>
                      Park. HG
                    </td>
                    <td>
                      1
                    </td>
                    <td>
                      9
                    </td>
                    <td>
                      3 / 9
                    </td>
                  </tr>
                </tbody>
              </table>
              <Paging />
            </div>
          </div>
        </div>
      </div>
    );
  }
}