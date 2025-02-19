import request from "@/utils/request";

export function getDemoString() {
  return request({
    url: "/data/demo/str",
    method: "get",
  });
}

export function getDemoArray() {
  return request({
    url: "/data/demo/arr",
    method: "get",
  });
}

export function getDemoObject() {
  return request({
    url: "/data/demo/obj",
    method: "get",
  });
}
