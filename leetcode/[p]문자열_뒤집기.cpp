// #1
#include<bits/stdc++.h>
using namespace std;

string solution(string my_string, int s, int e) {
    string str = my_string.substr(s, e - s + 1);
    reverse(str.begin(), str.end());
    my_string.replace(s, e - s + 1, str);
    return my_string;
}



// #2
#include<bits/stdc++.h>
using namespace std;

string solution(string my_string, int s, int e) {
    reverse(my_string.begin() + s, my_string.begin() + e + 1);
    return my_string;
}