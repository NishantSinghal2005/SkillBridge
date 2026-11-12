export const CAREERS = {
  "AI / ML Engineer": [
    {skill:"Python", q:"Which Python structure stores key-value pairs?", options:["List","Dictionary","Tuple","Set"], answer:1, explain:"A dictionary stores key-value pairs."},
    {skill:"Machine Learning", q:"What is supervised learning?", options:["Learning from labeled examples","Learning without data","Only clustering","Manual rule writing"], answer:0, explain:"Supervised models learn from labeled input-output examples."},
    {skill:"Deep Learning", q:"What is the basic computational unit of a neural network?", options:["Router","Neuron","Compiler","Database"], answer:1, explain:"Artificial neurons combine inputs, weights and an activation."},
    {skill:"SQL", q:"Which SQL command retrieves rows?", options:["INSERT","UPDATE","SELECT","DROP"], answer:2, explain:"SELECT retrieves data from tables."},
    {skill:"Data Structures & Algorithms", q:"What is the average lookup time in a hash table?", options:["O(n)","O(log n)","O(1)","O(n log n)"], answer:2, explain:"Hash tables provide average constant-time lookup."},
    {skill:"Git/GitHub", q:"Which command records staged changes?", options:["git push","git commit","git pull","git status"], answer:1, explain:"git commit creates a local commit."}
  ],
  "Full Stack Developer": [
    {skill:"HTML/CSS",q:"Which HTML element is used for the main page heading?",options:["<p>","<h1>","<head>","<title>"],answer:1,explain:"h1 represents the highest-level heading."},
    {skill:"JavaScript",q:"Which keyword declares a block-scoped variable that can be reassigned?",options:["var","let","const","static"],answer:1,explain:"let is block-scoped and can be reassigned."},
    {skill:"React",q:"Which hook manages local component state?",options:["useState","useRoute","useFetchOnly","useClass"],answer:0,explain:"useState adds state to function components."},
    {skill:"Node.js",q:"Node.js primarily runs JavaScript on which side?",options:["Server","CSS engine","Database only","Browser only"],answer:0,explain:"Node.js is a JavaScript runtime commonly used on servers."},
    {skill:"SQL",q:"Which clause filters grouped results?",options:["WHERE","ORDER BY","HAVING","LIMIT"],answer:2,explain:"HAVING filters groups after aggregation."},
    {skill:"Git/GitHub",q:"Which command sends local commits to a remote?",options:["git init","git push","git add","git log"],answer:1,explain:"git push uploads commits to a remote repository."}
  ],
  "Data Scientist": [
    {skill:"Python",q:"Which library is widely used for tabular data analysis?",options:["Pandas","Pygame","Tkinter","Turtle"],answer:0,explain:"Pandas provides DataFrame tools for data analysis."},
    {skill:"SQL",q:"Which function counts rows?",options:["SUM(*)","COUNT(*)","TOTAL(*)","ROWS()"],answer:1,explain:"COUNT(*) counts rows."},
    {skill:"Machine Learning",q:"What does a test set estimate?",options:["Training speed","Generalization to unseen data","File size","Number of features"],answer:1,explain:"A test set estimates performance on unseen examples."},
    {skill:"Statistics",q:"What is the median?",options:["Most frequent value","Middle ordered value","Arithmetic total","Largest value"],answer:1,explain:"The median is the middle value after sorting."},
    {skill:"Data Visualization",q:"Which chart is useful for a distribution?",options:["Histogram","Logo","Flowchart","Gantt chart"],answer:0,explain:"Histograms show the frequency distribution of numeric data."},
    {skill:"Deep Learning",q:"Which activation is commonly used in hidden layers?",options:["ReLU","CSV","JOIN","HTTP"],answer:0,explain:"ReLU is a common hidden-layer activation."}
  ],
  "Software Engineer": [
    {skill:"Java",q:"Which concept allows one interface to have multiple implementations?",options:["Polymorphism","Compilation","Serialization","Indexing"],answer:0,explain:"Polymorphism lets objects respond through a common interface."},
    {skill:"C++",q:"Which operator accesses a member through a pointer?",options:[".","->","::","&"],answer:1,explain:"The arrow operator accesses a member through a pointer."},
    {skill:"Data Structures & Algorithms",q:"Which data structure follows FIFO?",options:["Stack","Queue","Tree","Heap"],answer:1,explain:"A queue follows first-in, first-out order."},
    {skill:"Operating Systems",q:"What is a process?",options:["Program in execution","A source file","A database row","A network cable"],answer:0,explain:"A process is an executing instance of a program."},
    {skill:"Computer Networks",q:"Which protocol provides reliable, connection-oriented transport?",options:["UDP","IP","TCP","ARP"],answer:2,explain:"TCP provides reliable, ordered byte-stream delivery."},
    {skill:"Git/GitHub",q:"Which command creates a new branch?",options:["git branch name","git merge name","git fetch name","git reset name"],answer:0,explain:"git branch name creates a branch."}
  ],
  "Data Analyst": [
    {skill:"Python",q:"Which Python library is used for data frames?",options:["Pandas","Flask","Django","BeautifulSoup"],answer:0,explain:"Pandas is widely used for tabular analysis."},
    {skill:"SQL",q:"Which clause sorts query output?",options:["GROUP BY","ORDER BY","HAVING","WHERE"],answer:1,explain:"ORDER BY sorts rows."},
    {skill:"Statistics",q:"Which measure is sensitive to extreme values?",options:["Median","Mode","Mean","Quartile"],answer:2,explain:"The mean is affected by outliers."},
    {skill:"Data Visualization",q:"Which chart compares categories?",options:["Bar chart","Scatter plot only","Map projection","Network packet"],answer:0,explain:"Bar charts compare values across categories."},
    {skill:"Excel",q:"Which function calculates the arithmetic mean?",options:["COUNT","AVERAGE","MAX","CONCAT"],answer:1,explain:"AVERAGE returns the arithmetic mean."},
    {skill:"MySQL",q:"Which command changes existing rows?",options:["ALTER","UPDATE","CREATE","GRANT"],answer:1,explain:"UPDATE modifies existing table rows."}
  ],
  "Cloud Engineer": [
    {skill:"Linux",q:"Which command lists files?",options:["pwd","ls","cd","rm"],answer:1,explain:"ls lists directory contents."},
    {skill:"Computer Networks",q:"What does DNS do?",options:["Encrypts disks","Resolves names to IP addresses","Compiles code","Allocates RAM"],answer:1,explain:"DNS maps domain names to IP addresses."},
    {skill:"Python",q:"Which keyword defines a function?",options:["func","def","function","lambda only"],answer:1,explain:"def defines a Python function."},
    {skill:"Cloud Computing",q:"What is IaaS?",options:["Infrastructure as a Service","Internet as a Script","Interface as a System","Identity as a Server"],answer:0,explain:"IaaS provides virtualized compute, storage and networking."},
    {skill:"Git/GitHub",q:"Which command downloads remote changes and integrates them?",options:["git pull","git status","git init","git tag"],answer:0,explain:"git pull fetches and integrates remote changes."},
    {skill:"Operating Systems",q:"Which component schedules CPU time among processes?",options:["Scheduler","Assembler","DNS","Cache line"],answer:0,explain:"The OS scheduler selects processes for CPU execution."}
  ]
};
