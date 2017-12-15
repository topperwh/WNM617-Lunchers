//
//  SecondVC.swift
//  TopperCalculator
//
//  Created by Topper Wonghart on 8/12/2560 BE.
//  Copyright © 2560 Topper Wonghart. All rights reserved.
//

import UIKit
import WebKit

class SecondVC: UIViewController, WKNavigationDelegate {
    @IBOutlet weak var concept: UIView!
    var webView : WKWebView!
    
    override func viewDidLoad() {
        super.viewDidLoad()
        // Do any additional setup after loading the view, typically from a nib.
        let custom = "http://topperwh.webhostingforstudents.com/617-iphone/finalsite/newstore/custom.php"
        let url = URL(string:custom)
        let request = URLRequest(url: url!)
        webView = WKWebView(frame: self.view.frame)
        webView.navigationDelegate = self
        webView.load(request)
        self.view.addSubview(webView)
    }
    
    override func didReceiveMemoryWarning() {
        super.didReceiveMemoryWarning()
        // Dispose of any resources that can be recreated.
    }
    
    
}

