// import java.lang.Runtime;
		// <!-- Process run = Runtime.getRuntime().exec("cmd.exe", "/d", "Start", "path of the bat file"); -->
		// Process run = Runtime.getRuntime().exec("cmd.exe", "/d", "Start");
		// var file = new File("C:\\A1\\????.txt"); 
			// <!-- var sourceFolder = new Folder("~/Desktop/source");   -->
				// <!-- var destFolder = new Folder("~/Desktop/destination");   -->
				// <!-- var fileList = sourceFolder.getFiles();   -->
				// <!-- for (var i = 0; i < fileList.length; i++)  -->
				// <!-- {   -->
					// <!-- if (fileList[i].copy(decodeURI(destFolder) + "/" + fileList[i].displayName)) {   -->
						// <!-- fileList[i].remove();   -->
					// <!-- }     -->
				// <!-- }   -->
				chrome.browserAction.onClicked.addListener(function(tab) {
    var action_url = "http://www.reddit.com/submit?url=" + encodeURIComponent(tab.href) + '&title=' + encodeURIComponent(tab.title);
    chrome.tabs.create({ url: action_url });
  });
				// chrome.tabs.create({ url: "http://www.google.com/", selected: false });