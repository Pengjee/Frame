import request from '../utils/request/request';
import Config from "../config/api";
import { createTheURL } from "../utils/utils";

export async function departmentList(params) {
  return request(createTheURL(Config.API.DEPARTMENT, 'list'), {
    method: 'PUT',
    body: params,
  });
}

export async function departmentAdd(params) {
  return request(createTheURL(Config.API.DEPARTMENT, 'add'), {
    method: 'POST',
    body: params,
  });
}

export async function departmentDel(params) {
  return request(createTheURL(Config.API.DEPARTMENT, 'del'), {
    method: 'DELETE',
    body: params,
  });
}

export async function departmentEdit(params) {
  return request(createTheURL(Config.API.DEPARTMENT, 'edit'), {
    method: 'PUT',
    body: params,
  });
}

export async function departmentGet(params) {
  return request(createTheURL(Config.API.DEPARTMENT, 'get'), {
    method: 'PUT',
    body: params,
  });
}

export async function exportExcel(params) {
  return request(createTheURL(Config.API.DEPARTMENT, 'excel'), {
    method: 'POST',
    body: params,
  });
}

export async function exportExcelAll(params) {
  return request(createTheURL(Config.API.DEPARTMENT, 'excelAll'), {
    method: 'POST',
    body: params,
  });
}

