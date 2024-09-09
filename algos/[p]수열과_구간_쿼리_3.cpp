#include<bits/stdc++.h>
using namespace std;

vector<int> solution(vector<int> arr, vector<vector<int>> queries) {
    for(vector<int>& v : queries) {
        int n1 = v[0];
        int n2 = v[1];
        swap(arr[n1], arr[n2]);
    } 
    return arr;
}


#include<bits/stdc++.h>
using namespace std;

vector<int> solution(vector<int> arr, vector<vector<int>> queries) {
    for(vector<int>& v : queries) swap(arr[v[0]], arr[v[1]]);
    return arr;
}