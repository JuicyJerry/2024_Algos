#include<bits/stdc++.h>
using namespace std;

int solution(int a, int b) {
    int answer = 0;
    string x = to_string(a) + to_string(b);
    string y = to_string(b) + to_string(a);
    int numX = stoi(x);
    int numY = stoi(y);
    
    if (numX > numY) answer = numX; 
    else if (numX < numY) answer = numY; 
    else answer = numX;
    return answer;
}