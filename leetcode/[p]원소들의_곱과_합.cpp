#include<bits/stdc++.h>
using namespace std;

int solution(vector<int> num_list) {
    int sum = 0;
    int mult = 1;
    for(int a : num_list) sum += a;
    for(int a : num_list) mult *= a;
    return pow(sum, 2) > mult ? 1 : 0;
}

#include<bits/stdc++.h>
using namespace std;

int solution(vector<int> num_list) {
    int sum = 0;
    int mult = 1;
    for(int a : num_list) sum += a, mult *= a;
    return pow(sum, 2) > mult ? 1 : 0;
}