import json
import os.path
from collections import Counter


def read_json_file(filename):
    #this function reads JSON file and return its content
    #:param filename: path to file
    #:return: JSON object
    data_filename = open(filename, encoding="utf8")
    data = json.load(data_filename)
    return data


def write_json_file(filename, array):
    with open(filename, 'w') as f:
        json.dump(array, f)

def process_kidkalc_data():
    # --- INITIALISING EMPTY ARRAYS
    names = ["0iWkowHDjEhSgok55YLi3x6GB4z1",
    "1edeW189KDbmyEwDyOXAzUtXExh2",
    "5GGi5zw9UZWqHX0Sw1LPhckvC8T2",
    "5VmaCzbKIQfN4dX3H3NwfMUBWFc2",
    "5ncmF9pYuNfeOsZN9UZdK1Mp1mp1",
    "BD5sTFkPkgVwDUebmHAqsVuWgZm1",
    "ELzealfAkyWsVPVWxpZr9IbOgeV2",
    "EbtqpjZRtneBlxWKfa42THw0iaf1",
    "Ee8FVh6WQMO0NwObpGZDVXHG2kv1",
    "GZjmf08q7CfQXQbhTsZylFw3Yrk2",
    "IuROFXrspjUU3tczp7ReWaxxGx63",
    "JfvnIkrCBQQ8myeYzb3Qlld3POk1",
    "JyUbLZ7iTme8mlAdasBoNiDRaRq2",
    "KJ7ilFFORCPbivIvmVhmR5JreUE3",
    "LmQAXppGHyMx9pykdQzVjFQOchi2",
    "M1pWKrFuYCh2AKz2fmAwBBStkNG3",
    "O5BzVaEOiJSdDEcUQzif5iWeidM2",
    "O9QbH84J85OLISgMoCV7E1VZIjm2",
    "P66d80HFhleCKxvr3KF51fq9TIH2",
    "PjTfTnQuMQh7BVx5EWg2v3eYQzG2",
    "Q4NNrHsO23hJEG363wtHQFRBpEf2",
    "QxyGTDIBp4OtpfsY4933GXjGsvC2",
    "RGKyl57Dy9UbOEhdSSdRL0lFYtg1",
    "S1HaPgfM8qNkWxJRFHPWhCzjjaW2",
    "Uplq7d642GYUXRlpceZYMM4TsWq1",
    "VuDZ3NFgrGfOWm7oBeYKLfynZtD2",
    "XuX7rrLwcBTb0gEpWKDUnbvJlFA2",
    "ZYbwii2K4ORosETeavWlZr2fXOH2",
    "bPT4Qe9Y3LhqcS1vI6NyZ73xopa2",
    "cKUSeaGVTCRnHEWwwNbCmoVNcIq1",
    "cOPGxBepADN9BqmayljrwCWJLhD3",
    "d6CLRy7sbQQdrWjTDt6FXL44efG3",
    "dO1wNysZUHelG2ASZHyV6MLRQy52",
    "gmoAeNGfv8dJTlarwjqdg6jl4m42",
    "hlwATOY5k1YLbMrp1FvIQfmfdji1",
    "i5skXQPQV1QGBEDIQnf8uoYhhlo2",
    "leaderboard",
    "leaderboard2",
    "leaderboard3",
    "leaderboard4",
    "leaderboard5",
    "leaderboard6",
    "leaderboard7",
    "leaderboard8",
    "mVg6ixibbxbJ0wMX52THPCvNqxm2",
    "mX4h2c02J4O8ZGU4UBcYT3J3MzA2",
    "nCGMHcHrR1QWFYzw3wqLEvGaZsm1",
    "pzIxYkpXZbbXF25ttQYc25a6E4M2",
    "qgYnGsmL3QT7OL2jBs7W7Wn7Dr03",
    "undefined",
    "wswO6SVTvDWTJDX4RunVi8gll7Z2",
    "xgCDLCe2DxROX0KtAx26z4wV4T23",
    "zm6arXTEvsNEcyJvwBBL0IHigWa2"]

    # Loads all tweets
    data_filename = 'season/season8.json'
    season_data = read_json_file(data_filename)

    for i in range(len(names)):
        ordername = names[i]
        print(season_data["stats"][ordername])
       # issues = (season_data["COVID-19 Research Project"][i]["How Often Have You Overthought Issues Due To Isolation & Low Social Interaction?"])

     #   overthought_issues.append(issues)
    #
    #overthought_issues_count_dict = [{'tag': issues, 'count': freq}
    #                      for issues, freq in (Counter(overthought_issues)).items()]                    
    #overthought_issues_array = sorted(
    #    overthought_issues_count_dict, key=lambda x: x['tag'], reverse=False)[:len(overthought_issues_count_dict)]
    
   # print((Counter(overthought_issues)).items())
    
   # write_json_file('static/JSON_Study/overthought_issues_q15.json',
   #                 overthought_issues_array)

process_kidkalc_data()