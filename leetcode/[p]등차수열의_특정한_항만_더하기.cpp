#include<bits/stdc++.h>
using namespace std;

int solution(int a, int d, vector<bool> included) {
    int sum = 0;
    int temp = a;
    vector<int> seq = {a};
    for(int i = 0; i < included.size() - 1; i++) seq.push_back(temp += d);
    for(int i = 0; i < included.size(); i++) if(included[i]) sum += seq[i]; 
    return sum;
}

