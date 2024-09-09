#include <string>
#include <vector>

using namespace std;

vector<string> solution(vector<string> str_list) {
    for (int i = 0; i < size(str_list); i++) {
        if (str_list[i] == "l") {
            return vector<string>(str_list.begin(), str_list.begin() + i);
        } 
        
        if (str_list[i] == "r") {
            return vector<string>(str_list.begin() + i + 1, str_list.end());
        }
    }
    
    return vector<string>({});
}