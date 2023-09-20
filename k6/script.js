import http from 'k6/http';
import { sleep, check } from 'k6';
export const options = {
    scenarios: {
        loadtest: {
            executor: 'constant-arrival-rate',
            rate: 25,
            timeUnit: '1s',
            duration: '30s',
            preAllocatedVUs: 30,
        }
    }
};

const GRAPHQL_QUERIES = [{ "operation": "query RandomQuery0($Query__user__id: ID!) {\n  posts {\n    title\n  }\n  user(id: $Query__user__id) {\n    address {\n      streetAddress1\n      city\n      state\n    }\n    posts {\n      id\n      title\n      content\n      featuredImage\n    }\n    id\n    name\n    email\n    bio\n  }\n  users {\n    id\n    name\n    bio\n  }\n}", "variables": { "Query__user__id": "94" }, "operationName": "RandomQuery0" }, { "operation": "query RandomQuery1 {\n  posts {\n    author {\n      email\n      bio\n    }\n    content\n  }\n}", "variables": {}, "operationName": "RandomQuery1" }, { "operation": "query RandomQuery2 {\n  posts {\n    id\n    title\n    content\n  }\n}", "variables": {}, "operationName": "RandomQuery2" }, { "operation": "query RandomQuery3($Query__post__id: ID!) {\n  post(id: $Query__post__id) {\n    id\n    title\n    content\n  }\n}", "variables": { "Query__post__id": "89" }, "operationName": "RandomQuery3" }, { "operation": "query RandomQuery4($Query__user__id: ID!) {\n  user(id: $Query__user__id) {\n    posts {\n      id\n      title\n      content\n    }\n    id\n    name\n    email\n    bio\n  }\n}", "variables": { "Query__user__id": "16" }, "operationName": "RandomQuery4" }, { "operation": "query RandomQuery5($Query__post__id: ID!) {\n  post(id: $Query__post__id) {\n    author {\n      posts {\n        author {\n          id\n          email\n        }\n      }\n      address {\n        city\n        state\n      }\n      name\n      email\n      bio\n    }\n    id\n    featuredImage\n  }\n}", "variables": { "Query__post__id": "78" }, "operationName": "RandomQuery5" }, { "operation": "query RandomQuery6($Query__post__id: ID!) {\n  post(id: $Query__post__id) {\n    content\n    featuredImage\n  }\n  posts {\n    id\n  }\n}", "variables": { "Query__post__id": "91" }, "operationName": "RandomQuery6" }, { "operation": "query RandomQuery7 {\n  posts {\n    id\n    title\n    content\n    featuredImage\n  }\n}", "variables": {}, "operationName": "RandomQuery7" }, { "operation": "query RandomQuery8 {\n  users {\n    id\n  }\n}", "variables": {}, "operationName": "RandomQuery8" }, { "operation": "query RandomQuery9($Query__post__id: ID!) {\n  post(id: $Query__post__id) {\n    author {\n      posts {\n        author {\n          name\n        }\n        id\n        content\n        featuredImage\n      }\n      address {\n        streetAddress1\n        city\n        state\n        postCode\n      }\n      id\n      bio\n    }\n    title\n    content\n  }\n  users {\n    address {\n      city\n    }\n    posts {\n      id\n      content\n      featuredImage\n    }\n    id\n    name\n    email\n  }\n}", "variables": { "Query__post__id": "79" }, "operationName": "RandomQuery9" }, { "operation": "query RandomQuery10 {\n  users {\n    id\n    name\n    email\n  }\n}", "variables": {}, "operationName": "RandomQuery10" }, { "operation": "query RandomQuery11 {\n  posts {\n    id\n    title\n    featuredImage\n  }\n}", "variables": {}, "operationName": "RandomQuery11" }, { "operation": "query RandomQuery12($Query__post__id: ID!) {\n  post(id: $Query__post__id) {\n    title\n    content\n    featuredImage\n  }\n}", "variables": { "Query__post__id": "35" }, "operationName": "RandomQuery12" }, { "operation": "query RandomQuery13($Query__user__id: ID!) {\n  users {\n    posts {\n      author {\n        email\n        bio\n      }\n      id\n      content\n      featuredImage\n    }\n    id\n    name\n    email\n  }\n  posts {\n    author {\n      posts {\n        author {\n          name\n          email\n        }\n        id\n        title\n      }\n      id\n    }\n    title\n    content\n  }\n  user(id: $Query__user__id) {\n    posts {\n      featuredImage\n    }\n    address {\n      streetAddress1\n      streetAddress2\n      postCode\n      country\n    }\n    id\n    name\n    email\n    bio\n  }\n}", "variables": { "Query__user__id": "45" }, "operationName": "RandomQuery13" }, { "operation": "query RandomQuery14($Query__user__id: ID!) {\n  user(id: $Query__user__id) {\n    id\n    email\n    bio\n  }\n}", "variables": { "Query__user__id": "41" }, "operationName": "RandomQuery14" }, { "operation": "query RandomQuery15 {\n  users {\n    id\n    bio\n  }\n}", "variables": {}, "operationName": "RandomQuery15" }, { "operation": "query RandomQuery16($Query__post__id: ID!) {\n  post(id: $Query__post__id) {\n    id\n    featuredImage\n  }\n}", "variables": { "Query__post__id": "64" }, "operationName": "RandomQuery16" }, { "operation": "query RandomQuery17($Query__user__id: ID!) {\n  user(id: $Query__user__id) {\n    id\n    name\n    email\n    bio\n  }\n}", "variables": { "Query__user__id": "89" }, "operationName": "RandomQuery17" }, { "operation": "query RandomQuery18($Query__post__id: ID!) {\n  post(id: $Query__post__id) {\n    title\n    featuredImage\n  }\n  posts {\n    title\n    featuredImage\n  }\n}", "variables": { "Query__post__id": "24" }, "operationName": "RandomQuery18" }, { "operation": "query RandomQuery19($Query__post__id: ID!) {\n  post(id: $Query__post__id) {\n    author {\n      name\n      bio\n    }\n    id\n    title\n  }\n}", "variables": { "Query__post__id": "25" }, "operationName": "RandomQuery19" }, { "operation": "query RandomQuery20 {\n  posts {\n    author {\n      id\n      name\n      email\n      bio\n    }\n    id\n    title\n  }\n}", "variables": {}, "operationName": "RandomQuery20" }, { "operation": "query RandomQuery21($Query__post__id: ID!, $Query__user__id: ID!) {\n  users {\n    posts {\n      author {\n        id\n        email\n      }\n      id\n      content\n      featuredImage\n    }\n    address {\n      streetAddress1\n      city\n      state\n      postCode\n      country\n    }\n    name\n  }\n  posts {\n    author {\n      id\n      bio\n    }\n    id\n    title\n  }\n  post(id: $Query__post__id) {\n    id\n    title\n    content\n    featuredImage\n  }\n  user(id: $Query__user__id) {\n    address {\n      city\n      postCode\n    }\n    posts {\n      author {\n        address {\n          streetAddress2\n          postCode\n        }\n        posts {\n          title\n          content\n          featuredImage\n        }\n        name\n        email\n        bio\n      }\n      content\n    }\n    name\n    email\n    bio\n  }\n}", "variables": { "Query__post__id": "54", "Query__user__id": "54" }, "operationName": "RandomQuery21" }, { "operation": "query RandomQuery22($Query__user__id: ID!) {\n  user(id: $Query__user__id) {\n    posts {\n      title\n      content\n      featuredImage\n    }\n    address {\n      streetAddress1\n      city\n      country\n    }\n    name\n  }\n}", "variables": { "Query__user__id": "65" }, "operationName": "RandomQuery22" }, { "operation": "query RandomQuery23($Query__user__id: ID!, $Query__post__id: ID!) {\n  user(id: $Query__user__id) {\n    address {\n      city\n      state\n      postCode\n    }\n    id\n    bio\n  }\n  post(id: $Query__post__id) {\n    id\n    featuredImage\n  }\n}", "variables": { "Query__user__id": "76", "Query__post__id": "5" }, "operationName": "RandomQuery23" }, { "operation": "query RandomQuery24($Query__user__id: ID!) {\n  user(id: $Query__user__id) {\n    id\n    name\n    email\n    bio\n  }\n}", "variables": { "Query__user__id": "62" }, "operationName": "RandomQuery24" }]


export default function () {
    let seed = Math.floor(Math.random() * GRAPHQL_QUERIES.length)
    let op = GRAPHQL_QUERIES[seed]
    const payload = JSON.stringify({
        query: op.operation,
        variables: op.variables,
        operationName: op.operationName
    });

    const params = {
        headers: {
            'Content-Type': 'application/json',
        },
    };
    let resp = http.post('http://host.docker.internal:4000/', payload, params);
    check(resp, {
        "response code was 200": (res) => res.status === 200,
        "did not contain any errors": (res) => {
            return !res.json().errors
        }
    })
    sleep(1);
}
