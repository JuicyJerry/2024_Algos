#include <bits/stdc++.h>

using namespace std;

vector<int> solution(vector<int> num_list, int n) {
    num_list.erase(num_list.begin(), num_list.begin() + n - 1);
    return num_list;
}

#include <bits/stdc++.h>

using namespace std;

vector<int> solution(vector<int> num_list, int n) {
    return vector<int>(num_list.begin() + n - 1, num_list.end());
}

