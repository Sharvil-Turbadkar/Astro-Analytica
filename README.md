# Astro-Analytica
Forecasting outcomes and election polls using twitter sentimental analysis

We have collected our data using twitter premium functionalities 
API calls are made using tweepy and the data which has been collected through this API is stored in an S3 bucket. 
We then use IAM roles for de-coupling the front end of the application(made using flask ) from the back end(data being fetched from S3 bucket)
Technologies Used
1)Flask for front end
2)Python for calling twitter API along with performing sentimental analysis   
3) AWS -Services Used 
i)EC2 instance for hosting sites
ii) s3 bucket-for storing twitter data 
Future Goals :
We will be offering our product to customers for a freemium service 
Freemium model in which some of the advanced services will be paid
​No consultation necessary
​Data will be refreshed weekly
​Features Includes:
​Analytics dashboard
​Sentiment analysis by twitter handle 
Positive and negative word clouds
​The ratio of positive to negative sentiments  
Great no-cost data entry
Future Scope
After one month users will avail all services being provided with real-time data and analytics being tailor-made for this purpose   
Consultation is required  for 
​Real-time dashboards
​Services include:
​Customized interface 
​API available for data integration​
​Access to historical data
​SSO integration


