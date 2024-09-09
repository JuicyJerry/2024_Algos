#include<bits/stdc++.h>
using namespace std;

int solution(string number) {
    int answer = 0;
    for(char it : number) answer += it - '0';
    return answer % 9;
}