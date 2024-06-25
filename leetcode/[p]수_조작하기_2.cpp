#include<bits/stdc++.h>
using namespace std;

string solution(vector<int> numLog) {
    string str = "";
    for(int i = 1; i < numLog.size(); i++) {
        switch(numLog[i] - numLog[i - 1]) {
            case 1 : str += 'w'; break; 
            case -1 : str += 's'; break; 
            case 10 : str += 'd'; break; 
            case -10 : str += 'a'; break; 
        }
    }
    return str;
}


