let customers = [
    {
        id:"9d7daf68-9b55-11ee-b9d1-0242ac120002",
        name: "Jane Cooper",
        company: "Microsoft",
        phone: "(225) 555-0118",
        email: "jane@microsoft.com",
        country: "United States",
        status: "Active"
    },
    {
        id:"9d7dae50-9b55-11ee-b9d1-0242ac120002",
        name: "Floyd Miles",
        company: "Yahoo",
        phone: "(205) 555-0100",
        email: "floyd@yahoo.com",
        country: "Kiribati",
        status: "Inactive"
    },
    {
        id:"9d7daaf4-9b55-11ee-b9d1-0242ac120002",
        name: "Ronald Richar",
        company: "Adobe",
        phone: "(302) 555-0107",
        email: "ronald@adobe.com",
        country: "Israel",
        status: "Inactive"
    },
    {
        id:"9d7d872c-9b55-11ee-b9d1-0242ac120002",
        name: "Marvin McKinney",
        company: "Tesla",
        phone: "(252) 555-0126",
        email: "marvin@tesla.com",
        country: "Iran",
        status: "Active"
    },
    {
        id:"9d7d8826-9b55-11ee-b9d1-0242ac120002",
        name: "Jerome Bell",
        company: "Google",
        phone: "(252) 555-0126",
        email: "marvin@tesla.com",
        country: "Iran",
        status: "Active"
    },
    {
        id:"9d7d8916-9b55-11ee-b9d1-0242ac120002",
        name: "Kathryn Murphy",
        company: "Microsoft",
        phone: "(406) 555-0120",
        email: "kathryn@microsoft.com",
        country: "Curaçao",
        status: "Active"
    },
    {
        id:"9d7d8a10-9b55-11ee-b9d1-0242ac120002",
        name: "Jacob Jones",
        company: "Yahoo",
        phone: "(208) 555-0112",
        email: "jacob@yahoo.com",
        country: "Brazil",
        status: "Active"
    },
    {
        id:"9d7d8dd0-9b55-11ee-b9d1-0242ac120002",
        name: "Kristin Watson",
        company: "Facebook",
        phone: "(704) 555-0127",
        email: "kristin@facebook.com",
        country: "Åland Islands",
        status: "Inactive"
    },
    {
        id:"9d7d8ee8-9b55-11ee-b9d1-0242ac120002",
        name: "Alex Johnson",
        company: "Samsung",
        phone: "(111) 555-0111",
        email: "alex@samsung.com",
        country: "South Korea",
        status: "Active"
    },
    {
        id:"9d7d8fe2-9b55-11ee-b9d1-0242ac120002",
        name: "Emma Davis",
        company: "Sony",
        phone: "(222) 555-0222",
        email: "emma@sony.com",
        country: "Japan",
        status: "Inactive"
    },
    {
        id:"9d7d90e6-9b55-11ee-b9d1-0242ac120002",
        name: "Ryan Smith",
        company: "LG",
        phone: "(333) 555-0333",
        email: "ryan@lg.com",
        country: "South Korea",
        status: "Active"
    },
    {
        id:"9d7d923a-9b55-11ee-b9d1-0242ac120002",
        name: "Sophia Lee",
        company: "Panasonic",
        phone: "(444) 555-0444",
        email: "sophia@panasonic.com",
        country: "Japan",
        status: "Inactive"
    },
    {
        id:"9d7d933e-9b55-11ee-b9d1-0242ac120002",
        name: "William Chen",
        company: "Huawei",
        phone: "(555) 555-0555",
        email: "william@huawei.com",
        country: "China",
        status: "Active"
    },
    {
        id:"9d7d942e-9b55-11ee-b9d1-0242ac120002",
        name: "Olivia Wang",
        company: "Xiaomi",
        phone: "(666) 555-0666",
        email: "olivia@xiaomi.com",
        country: "China",
        status: "Active"
    },
    {
        id:"9d7d98ac-9b55-11ee-b9d1-0242ac120002",
        name: "Daniel Kim",
        company: "OnePlus",
        phone: "(777) 555-0777",
        email: "daniel@oneplus.com",
        country: "India",
        status: "Inactive"
    },
    {
        id:"9d7d99ce-9b55-11ee-b9d1-0242ac120002",
        name: "Ava Patel",
        company: "Vivo",
        phone: "(888) 555-0888",
        email: "ava@vivo.com",
        country: "India",
        status: "Active"
    },
    {
        id:"9d7d9ad2-9b55-11ee-b9d1-0242ac120002",
        name: "Noah Kim",
        company: "Tesla",
        phone: "(999) 555-0999",
        email: "noah@tesla.com",
        country: "United States",
        status: "Active"
    },
    {
        id:"9d7d9bc2-9b55-11ee-b9d1-0242ac120002",
        name: "Avery Park",
        company: "SpaceX",
        phone: "(101) 555-1010",
        email: "avery@spacex.com",
        country: "Mars",
        status: "Active"
    },
    {
        id:"9d7d9d0c-9b55-11ee-b9d1-0242ac120002",
        name: "Madison White",
        company: "Blue Origin",
        phone: "(202) 555-2020",
        email: "madison@blueorigin.com",
        country: "Moon",
        status: "Inactive"
    },
    {
        id:"9d7d9e06-9b55-11ee-b9d1-0242ac120002",
        name: "John Smith",
        company: "Samsung",
        phone: "(111) 555-0111",
        email: "john@samsung.com",
        country: "South Korea",
        status: "Active"
    },
    {
        id:"9d7d9f00-9b55-11ee-b9d1-0242ac120002",
        name: "Emma Davis",
        company: "Sony",
        phone: "(222) 555-0222",
        email: "emma@sony.com",
        country: "Japan",
        status: "Inactive"
    },
    {
        id:"9d7da040-9b55-11ee-b9d1-0242ac120002",
        name: "Ryan Johnson",
        company: "LG",
        phone: "(333) 555-0333",
        email: "ryan@lg.com",
        country: "South Korea",
        status: "Active"
    },
    {
        id:"9d7da3b0-9b55-11ee-b9d1-0242ac120002",
        name: "Sophia Lee",
        company: "Panasonic",
        phone: "(444) 555-0444",
        email: "sophia@panasonic.com",
        country: "Japan",
        status: "Inactive"
    },
    {
        id:"9d7da50e-9b55-11ee-b9d1-0242ac120002",
        name: "William Chen",
        company: "Huawei",
        phone: "(555) 555-0555",
        email: "william@huawei.com",
        country: "China",
        status: "Active"
    },
    {
        id:"9d7da612-9b55-11ee-b9d1-0242ac120002",
        name: "Olivia Wang",
        company: "Xiaomi",
        phone: "(666) 555-0666",
        email: "olivia@xiaomi.com",
        country: "China",
        status: "Active"
    },
    {
        id:"9d7da716-9b55-11ee-b9d1-0242ac120002",
        name: "Noah Kim",
        company: "Tesla",
        phone: "(999) 555-0999",
        email: "noah@tesla.com",
        country: "United States",
        status: "Active"
    },
    {
        id:"9d7da8f6-9b55-11ee-b9d1-0242ac120002",
        name: "Avery Park",
        company: "SpaceX",
        phone: "(101) 555-1010",
        email: "avery@spacex.com",
        country: "Mars",
        status: "Active"
    },
    {
        id:"9d7da9f0-9b55-11ee-b9d1-0242ac120002",
        name: "Madison White",
        company: "Blue Origin",
        phone: "(202) 555-2020",
        email: "madison@blueorigin.com",
        country: "Moon",
        status: "Inactive"
    },
    {
        id:"0ad40d94-9b58-11ee-b9d1-0242ac120002",
        name: "Ethan Brown",
        company: "Google",
        phone: "(303) 555-3030",
        email: "ethan@google.com",
        country: "United States",
        status: "Active"
    },
    {
        id:"0ad40830-9b58-11ee-b9d1-0242ac120002",
        name: "Isabella Smith",
        company: "Microsoft",
        phone: "(404) 555-4040",
        email: "isabella@microsoft.com",
        country: "United States",
        status: "Inactive"
    },
    {
        id:"0ad4070e-9b58-11ee-b9d1-0242ac120002",
        name: "Mason Wilson",
        company: "Apple",
        phone: "(505) 555-5050",
        email: "mason@apple.com",
        country: "United States",
        status: "Active"
    },
    {
        id:"0ad40600-9b58-11ee-b9d1-0242ac120002",
        name: "Aria Johnson",
        company: "Amazon",
        phone: "(606) 555-6060",
        email: "aria@amazon.com",
        country: "United States",
        status: "Inactive"
    },
    {
        id:"0ad404de-9b58-11ee-b9d1-0242ac120002",
        name: "Carter Davis",
        company: "Facebook",
        phone: "(707) 555-7070",
        email: "carter@facebook.com",
        country: "United States",
        status: "Active"
    },
    {
        id:"0ad403bc-9b58-11ee-b9d1-0242ac120002",
        name: "Grace Johnson",
        company: "Netflix",
        phone: "(808) 555-8080",
        email: "grace@netflix.com",
        country: "United States",
        status: "Inactive"
    },
    {
        id:"0ad402a4-9b58-11ee-b9d1-0242ac120002",
        name: "Henry Brown",
        company: "Adobe",
        phone: "(909) 555-9090",
        email: "henry@adobe.com",
        country: "United States",
        status: "Active"
    },
    {
        id:"0ad40060-9b58-11ee-b9d1-0242ac120002",
        name: "Lily Wilson",
        company: "Twitter",
        phone: "(010) 555-0101",
        email: "lily@twitter.com",
        country: "United States",
        status: "Inactive"
    },
    {
        id:"0ad40182-9b58-11ee-b9d1-0242ac120002",
        name: "Jackson Smith",
        company: "Uber",
        phone: "(020) 555-0202",
        email: "jackson@uber.com",
        country: "United States",
        status: "Active"
    },
    {
        id:"a1b1c806-9b57-11ee-b9d1-0242ac120002",
        name: "Scarlett Davis",
        company: "Airbnb",
        phone: "(030) 555-0303",
        email: "scarlett@airbnb.com",
        country: "United States",
        status: "Inactive"
    },
    {
        id:"a1b1cb12-9b57-11ee-b9d1-0242ac120002",
        name: "Liam Johnson",
        company: "LinkedIn",
        phone: "(040) 555-0404",
        email: "liam@linkedin.com",
        country: "United States",
        status: "Active"
    },
    {
        id:"a1b1cc5c-9b57-11ee-b9d1-0242ac120002",
        name: "Ella Brown",
        company: "Pinterest",
        phone: "(050) 555-0505",
        email: "ella@pinterest.com",
        country: "United States",
        status: "Active"
    },
    {
        id:"a1b1cd88-9b57-11ee-b9d1-0242ac120002",
        name: "Lucas Davis",
        company: "Snapchat",
        phone: "(060) 555-0606",
        email: "lucas@snapchat.com",
        country: "United States",
        status: "Inactive"
    },
    {
        id:"a1b1cea0-9b57-11ee-b9d1-0242ac120002",
        name: "Mia Johnson",
        company: "WhatsApp",
        phone: "(070) 555-0707",
        email: "mia@whatsapp.com",
        country: "United States",
        status: "Active"
    },
    {
        id:"a1b1d3d2-9b57-11ee-b9d1-0242ac120002",
        name: "Logan Wilson",
        company: "TikTok",
        phone: "(080) 555-0808",
        email: "logan@tiktok.com",
        country: "United States",
        status: "Inactive"
    },
    {
        id:"a1b1e05c-9b57-11ee-b9d1-0242ac120002",
        name: "Abigail Smith",
        company: "Reddit",
        phone: "(090) 555-0909",
        email: "abigail@reddit.com",
        country: "United States",
        status: "Active"
    },
    {
        id:"a1b1ddc8-9b57-11ee-b9d1-0242ac120002",
        name: "Daniel Lee",
        company: "Zoom",
        phone: "(101) 555-1010",
        email: "daniel@zoom.com",
        country: "United States",
        status: "Inactive"
    },
    {
        id:"a1b1db2a-9b57-11ee-b9d1-0242ac120002",
        name: "Sofia Davis",
        company: "Spotify",
        phone: "(202) 555-2020",
        email: "sofia@spotify.com",
        country: "United States",
        status: "Active"
    },
    {
        id:"a1b1df44-9b57-11ee-b9d1-0242ac120002",
        name: "Jack Brown",
        company: "LinkedIn",
        phone: "(303) 555-3030",
        email: "jack@linkedin.com",
        country: "United States",
        status: "Inactive"
    },
    {
        id:"de37358c-9b56-11ee-b9d1-0242ac120002",
        name: "Avery Wilson",
        company: "Twitter",
        phone: "(404) 555-4040",
        email: "avery@twitter.com",
        country: "United States",
        status: "Active"
    },
    {
        id:"9d7d6558-9b55-11ee-b9d1-0242ac120002",
        name: "Scarlett Lee",
        company: "Uber",
        phone: "(505) 555-5050",
        email: "scarlett@uber.com",
        country: "United States",
        status: "Inactive"
    },
    {
        id:"9d7d6bf2-9b55-11ee-b9d1-0242ac120002",
        name: "James Johnson",
        company: "Airbnb",
        phone: "(606) 555-6060",
        email: "james@airbnb.com",
        country: "United States",
        status: "Active"
    },
    {
        id:"9d7d6bf2-9b55-11ee-b9d1-0242ac120002",
        name: "Lily Smith",
        company: "Netflix",
        phone: "(707) 555-7070",
        email: "lily@netflix.com",
        country: "United States",
        status: "Inactive"
    },
    {
        id:"9d7d6d8c-9b55-11ee-b9d1-0242ac120002",
        name: "Henry Davis",
        company: "Facebook",
        phone: "(808) 555-8080",
        email: "henry@facebook.com",
        country: "United States",
        status: "Active"
    },
    {
        id:"9d7d6eae-9b55-11ee-b9d1-0242ac120002",
        name: "Grace Wilson",
        company: "Google",
        phone: "(909) 555-9090",
        email: "grace@google.com",
        country: "United States",
        status: "Inactive"
    },
    {
        id:"9d7d6fb2-9b55-11ee-b9d1-0242ac120002",
        name: "Ethan Lee",
        company: "Microsoft",
        phone: "(010) 555-0101",
        email: "ethan@microsoft.com",
        country: "United States",
        status: "Active"
    },
    {
        id:"9d7d70c0-9b55-11ee-b9d1-0242ac120002",
        name: "Isabella Smith",
        company: "Apple",
        phone: "(020) 555-0202",
        email: "isabella@apple.com",
        country: "United States",
        status: "Inactive"
    },
    {
        id:"9d7d71ba-9b55-11ee-b9d1-0242ac120002",
        name: "Mason Davis",
        company: "Amazon",
        phone: "(030) 555-0303",
        email: "mason@amazon.com",
        country: "United States",
        status: "Active"
    },
    {
        id:"9d7d72b4-9b55-11ee-b9d1-0242ac120002",
        name: "Aria Johnson",
        company: "Tesla",
        phone: "(040) 555-0404",
        email: "aria@tesla.com",
        country: "United States",
        status: "Inactive"
    },
    {
        id:"9d7d77b4-9b55-11ee-b9d1-0242ac120002",
        name: "Carter Wilson",
        company: "SpaceX",
        phone: "(050) 555-0505",
        email: "carter@spacex.com",
        country: "United States",
        status: "Active"
    },
    {
        id:"9d7d78d6-9b55-11ee-b9d1-0242ac120002",
        name: "Grace Smith",
        company: "Blue Origin",
        phone: "(060) 555-0606",
        email: "grace@blueorigin.com",
        country: "United States",
        status: "Inactive"
    },
    {
        id:"9d7d79da-9b55-11ee-b9d1-0242ac120002",
        name: "Liam Davis",
        company: "Google",
        phone: "(070) 555-0707",
        email: "liam@google.com",
        country: "United States",
        status: "Active"
    },
    {
        id:"9d7d7ae8-9b55-11ee-b9d1-0242ac120002",
        name: "Olivia Johnson",
        company: "Microsoft",
        phone: "(080) 555-0808",
        email: "olivia@microsoft.com",
        country: "United States",
        status: "Inactive"
    },
    {
        id:"9d7d7be2-9b55-11ee-b9d1-0242ac120002",
        name: "Noah Wilson",
        company: "Apple",
        phone: "(090) 555-0909",
        email: "noah@apple.com",
        country: "United States",
        status: "Active"
    },
    {
        id:"9d7d7cdc-9b55-11ee-b9d1-0242ac120002",
        name: "Emma Davis",
        company: "Amazon",
        phone: "(101) 555-1010",
        email: "emma@amazon.com",
        country: "United States",
        status: "Inactive"
    },
    {
        id:"9d7d7dd6-9b55-11ee-b9d1-0242ac120002",
        name: "Ethan Smith",
        company: "Facebook",
        phone: "(202) 555-2020",
        email: "ethan@facebook.com",
        country: "United States",
        status: "Active"
    },
    {
        id:"9d7d7ed0-9b55-11ee-b9d1-0242ac120002",
        name: "Ava Davis",
        company: "Netflix",
        phone: "(303) 555-3030",
        email: "ava@netflix.com",
        country: "United States",
        status: "Inactive"
    },
    {
        id:"9d7d8290-9b55-11ee-b9d1-0242ac120002",
        name: "Jackson Johnson",
        company: "Google",
        phone: "(404) 555-4040",
        email: "jackson@google.com",
        country: "United States",
        status: "Active"
    },
    {
        id:"9d7d8420-9b55-11ee-b9d1-0242ac120002",
        name: "Scarlett Davis",
        company: "Microsoft",
        phone: "(505) 555-5050",
        email: "scarlett@microsoft.com",
        country: "United States",
        status: "Inactive"
    },
    {
        id:"9d7d8538-9b55-11ee-b9d1-0242ac120002",
        name: "Elijah Wilson",
        company: "Tesla",
        phone: "(606) 555-6060",
        email: "elijah@tesla.com",
        country: "United States",
        status: "Active"
    },
    {
        id:"9d7d8628-9b55-11ee-b9d1-0242ac120002",
        name: "Aria Davis",
        company: "SpaceX",
        phone: "(707) 555-7070",
        email: "aria@spacex.com",
        country: "United States",
        status: "Inactive"
    },
    {
        id:"de373c9e-9b56-11ee-b9d1-0242ac120002",
        name: "Carter Johnson",
        company: "Blue Origin",
        phone: "(808) 555-8080",
        email: "carter@blueorigin.com",
        country: "United States",
        status: "Active"
    },
    {
        id:"de373da2-9b56-11ee-b9d1-0242ac120002",
        name: "Grace Davis",
        company: "Google",
        phone: "(909) 555-9090",
        email: "grace@google.com",
        country: "United States",
        status: "Inactive"
    },
    {
        id:"de373f00-9b56-11ee-b9d1-0242ac120002",
        name: "Ethan Smith",
        company: "Microsoft",
        phone: "(010) 555-0101",
        email: "ethan@microsoft.com",
        country: "United States",
        status: "Active"
    },
    {
        id:"de37413a-9b56-11ee-b9d1-0242ac120002",
        name: "Isabella Johnson",
        company: "Apple",
        phone: "(020) 555-0202",
        email: "isabella@apple.com",
        country: "United States",
        status: "Inactive"
    },
    {
        id:"a1b1d526-9b57-11ee-b9d1-0242ac120002",
        name: "Mason Davis",
        company: "Amazon",
        phone: "(030) 555-0303",
        email: "mason@amazon.com",
        country: "United States",
        status: "Active"
    },
    {
        id:"a1b1d652-9b57-11ee-b9d1-0242ac120002",
        name: "Aria Wilson",
        company: "Tesla",
        phone: "(040) 555-0404",
        email: "aria@tesla.com",
        country: "United States",
        status: "Inactive"
    },
    {
        id:"a1b1d760-9b57-11ee-b9d1-0242ac120002",
        name: "Carter Smith",
        company: "SpaceX",
        phone: "(050) 555-0505",
        email: "carter@spacex.com",
        country: "United States",
        status: "Active"
    },
    {
        id:"a1b1d878-9b57-11ee-b9d1-0242ac120002",
        name: "Liam Davis",
        company: "Blue Origin",
        phone: "(060) 555-0606",
        email: "liam@blueorigin.com",
        country: "United States",
        status: "Inactive"
    },
    {
        id:"a1b1d9fe-9b57-11ee-b9d1-0242ac120002",
        name: "Olivia Johnson",
        company: "Google",
        phone: "(070) 555-0707",
        email: "olivia@google.com",
        country: "United States",
        status: "Active"
    },
    {
        id:"de372510-9b56-11ee-b9d1-0242ac120002",
        name: "Noah Wilson",
        company: "Microsoft",
        phone: "(080) 555-0808",
        email: "noah@microsoft.com",
        country: "United States",
        status: "Inactive"
    },
    {
        id:"de372808-9b56-11ee-b9d1-0242ac120002",
        name: "Emma Davis",
        company: "Apple",
        phone: "(090) 555-0909",
        email: "emma@apple.com",
        country: "United States",
        status: "Active"
    },
    {
        id:"de372aba-9b56-11ee-b9d1-0242ac120002",
        name: "Ethan Smith",
        company: "Amazon",
        phone: "(101) 555-1010",
        email: "ethan@amazon.com",
        country: "United States",
        status: "Inactive"
    },
    {
        id:"de372cc2-9b56-11ee-b9d1-0242ac120002",
        name: "Ava Davis",
        company: "Netflix",
        phone: "(202) 555-2020",
        email: "ava@netflix.com",
        country: "United States",
        status: "Active"
    },
    {
        id:"de372de4-9b56-11ee-b9d1-0242ac120002",
        name: "Jackson Johnson",
        company: "Google",
        phone: "(303) 555-3030",
        email: "jackson@google.com",
        country: "United States",
        status: "Inactive"
    },
    {
        id:"de372ef2-9b56-11ee-b9d1-0242ac120002",
        name: "Scarlett Davis",
        company: "Microsoft",
        phone: "(404) 555-4040",
        email: "scarlett@microsoft.com",
        country: "United States",
        status: "Active"
    },
    {
        id:"de372ff6-9b56-11ee-b9d1-0242ac120002",
        name: "James Wilson",
        company: "Apple",
        phone: "(505) 555-5050",
        email: "james@apple.com",
        country: "United States",
        status: "Inactive"
    },
    {
        id:"de374522-9b56-11ee-b9d1-0242ac120002",
        name: "Lily Davis",
        company: "Amazon",
        phone: "(606) 555-6060",
        email: "lily@amazon.com",
        country: "United States",
        status: "Active"
    },
    {
        id:"de37441e-9b56-11ee-b9d1-0242ac120002",
        name: "Henry Johnson",
        company: "Netflix",
        phone: "(707) 555-7070",
        email: "henry@netflix.com",
        country: "United States",
        status: "Inactive"
    },
    {
        id:"de37332a-9b56-11ee-b9d1-0242ac120002",
        name: "Grace Wilson",
        company: "Google",
        phone: "(808) 555-8080",
        email: "grace@google.com",
        country: "United States",
        status: "Active"
    },
    {
        id:"de37347e-9b56-11ee-b9d1-0242ac120002",
        name: "Ethan Davis",
        company: "Microsoft",
        phone: "(909) 555-9090",
        email: "ethan@microsoft.com",
        country: "United States",
        status: "Inactive"
    },
    {
        id:"de373690-9b56-11ee-b9d1-0242ac120002",
        name: "Aria Smith",
        company: "Apple",
        phone: "(010) 555-0101",
        email: "aria@apple.com",
        country: "United States",
        status: "Active"
    },
    {
        id:"de373794-9b56-11ee-b9d1-0242ac120002",
        name: "Carter Davis",
        company: "Amazon",
        phone: "(020) 555-0202",
        email: "carter@amazon.com",
        country: "United States",
        status: "Inactive"
    },
    {
        id:"de373b86-9b56-11ee-b9d1-0242ac120002",
        name: "Scarlett Wilson",
        company: "Netflix",
        phone: "(030) 555-0303",
        email: "scarlett@netflix.com",
        country: "United States",
        status: "Active"
    },
    {
        id:"de3742d4-9b56-11ee-b9d1-0242ac120002",
        name: "James Davis",
        company: "Google",
        phone: "(040) 555-0404",
        email: "james@google.com",
        country: "United States",
        status: "Inactive"
    }
]


