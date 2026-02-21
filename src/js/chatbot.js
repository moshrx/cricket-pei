/* Cricket PEI Chatbot — self-contained, no dependencies */
(function () {
    'use strict';

    /* ── Knowledge Base ────────────────────────────────────── */
    var KB = [
        {
            keys: ['hello', 'hi', 'hey', 'good morning', 'good afternoon', 'good evening', 'greetings', 'howdy', 'sup'],
            answer: "Hey there! Welcome to Cricket PEI. I'm here to help you with anything about cricket on the Island. What would you like to know?"
        },
        {
            keys: ['what is cricket pei', 'about cricket pei', 'who are you', 'tell me about', 'what do you do', 'organization'],
            answer: 'Cricket PEI (PEI Cricket Association) has been promoting cricket excellence and community growth on Prince Edward Island since 2007. We have 300+ active players, 2 major grounds, and over 15 years of history. <a href="about.html">Read our full story &rarr;</a>'
        },
        {
            keys: ['register', 'registration', 'sign up', 'signup', 'join', 'membership', 'member', 'how to join', 'become a member', 'enroll', 'enrolment'],
            answer: 'Registration for the 2026 season is open! You get full season league play, coaching & equipment access, and an official membership card. <a href="https://docs.google.com/forms/d/e/1FAIpQLSeULzCAE38hfVo3_wEAjflkHBK3uLeL6M88QucaGU-PWAoD9A/viewform" target="_blank">Apply now &rarr;</a>'
        },
        {
            keys: ['schedule', 'fixture', 'match', 'game', 'next match', 'next game', 'upcoming', 'when is the match', 'when is the game'],
            answer: 'Check out the latest CCL match schedule with dates, times, and venues. <a href="schedule.html">View the CCL Schedule &rarr;</a>'
        },
        {
            keys: ['live score', 'score', 'scorecard', 'cricclubs', 'live scores'],
            answer: 'You can follow live scores on CricClubs: <a href="https://cricclubs.com/CAPEICricket" target="_blank">Live Scores &rarr;</a>'
        },
        {
            keys: ['watch', 'stream', 'youtube', 'live stream', 'broadcast', 'video', 'watch live'],
            answer: 'Watch our matches live on YouTube! <a href="https://www.youtube.com/@cricketpei/streams" target="_blank">Watch Live &rarr;</a>'
        },
        {
            keys: ['ccl', 'chandrasekara', 'league', 'championship', 'tournament'],
            answer: 'The Chandrasekara Cricket League (CCL) is our premier hard-ball competition in PEI. It features professional stats tracking via CricHeroes and high-intensity match play. <a href="schedule.html">See the schedule &rarr;</a>'
        },
        {
            keys: ['program', 'youth', 'training', 'coaching', 'outreach', 'kids', 'children', 'junior', 'beginner'],
            answer: 'We offer several programs: the CCL professional league, Youth Outreach for the next generation, and Provincial Team representation in Atlantic Championships. <a href="programs.html">Explore all programs &rarr;</a>'
        },
        {
            keys: ['provincial', 'atlantic', 'interprovincial', 'nova scotia', 'new brunswick', 'newfoundland', 'team pei'],
            answer: 'Our provincial team represents PEI in the Atlantic Championships against Nova Scotia, New Brunswick, and Newfoundland & Labrador, competing in the Atlantic T20 Trophy and Inter-Provincial Series. <a href="programs.html">Learn more &rarr;</a>'
        },
        {
            keys: ['board', 'leadership', 'president', 'director', 'committee', 'executive', 'who runs'],
            answer: 'Cricket PEI is led by a dedicated volunteer board. View all our board members and their roles on the Leadership page. <a href="board.html">Meet the team &rarr;</a>'
        },
        {
            keys: ['gallery', 'photo', 'picture', 'image', 'pics'],
            answer: 'Check out amazing match photos and moments from our events! <a href="gallery.html">Browse the Gallery &rarr;</a>'
        },
        {
            keys: ['contact', 'email', 'phone', 'call', 'reach', 'get in touch'],
            answer: 'You can reach Cricket PEI by:<br>Phone: <a href="tel:9023147644">902-314-7644</a><br>Email: <a href="mailto:cricketpei@gmail.com">cricketpei@gmail.com</a>'
        },
        {
            keys: ['social', 'facebook', 'instagram', 'follow'],
            answer: 'Follow us on social media!<br><a href="https://www.facebook.com/p/PEI-Cricket-Association-100057478210038/" target="_blank">Facebook</a> &bull; <a href="https://www.instagram.com/cricketpei" target="_blank">Instagram</a> &bull; <a href="https://www.youtube.com/@cricketpei" target="_blank">YouTube</a>'
        },
        {
            keys: ['location', 'ground', 'field', 'venue', 'tea hill', 'where do you play', 'address', 'tea hill park', 'cricket ground'],
            answer: 'Our main ground is Tea Hill Park, opened in 2009 by the Lieutenant Governor. We have 2 major grounds on PEI for our matches.'
        },
        {
            keys: ['history', 'story', 'founded', 'started', 'origin', 'how long', '2007', 'when was'],
            answer: 'Cricket PEI was founded in 2007 when a passionate group gathered in Stratford to revive the sport. Led by immigrants from Sri Lanka, Bangladesh, India, and Australia alongside local Islanders, we raised over $430k and opened Tea Hill Park in 2009. <a href="about.html">Read our full story &rarr;</a>'
        },
        {
            keys: ['sponsor', 'partner', 'donate', 'support', 'sponsor us', 'funding'],
            answer: 'We have wonderful partners supporting cricket on PEI. Interested in sponsoring or partnering? Reach out at <a href="mailto:cricketpei@gmail.com">cricketpei@gmail.com</a> or call <a href="tel:9023147644">902-314-7644</a>.'
        },
        {
            keys: ['privacy', 'policy', 'data', 'personal information'],
            answer: 'We take your privacy seriously. <a href="privacy.html">View our Privacy Policy &rarr;</a>'
        },
        {
            keys: ['event', 'season opener', 'multicultural', 'festival', 'community'],
            answer: 'We host great community events! The Season Opener is at Tea Hill Park in May 2026, plus our Multicultural Cricket Festival with matches and food from 10+ nations. <a href="programs.html">See all events &rarr;</a>'
        },
        {
            keys: ['cost', 'price', 'fee', 'how much', 'payment', 'pay'],
            answer: 'For membership fees and payment details, please check the registration form or contact us at <a href="mailto:cricketpei@gmail.com">cricketpei@gmail.com</a> or <a href="tel:9023147644">902-314-7644</a>.'
        },
        {
            keys: ['cricket canada', 'canada cricket', 'national body', 'national team'],
            answer: 'Cricket PEI is affiliated with Cricket Canada, the national governing body. <a href="https://cricketcanada.org/" target="_blank">Visit Cricket Canada &rarr;</a>'
        },
        {
            keys: ['thank', 'thanks', 'thx', 'appreciate'],
            answer: "You're welcome! If you have any more questions about Cricket PEI, just ask. See you at the pitch!"
        },
        {
            keys: ['bye', 'goodbye', 'see you', 'later', 'take care'],
            answer: "Take care! Hope to see you at a match soon. Go Cricket PEI!"
        }
    ];

    var quickReplies = [
        'How to join?',
        'CCL Schedule',
        'Live Scores',
        'Contact Info',
        'Programs',
        'Our Story'
    ];

    /* ── Matching ──────────────────────────────────────────── */
    function findAnswer(input) {
        var q = input.toLowerCase().replace(/[^a-z0-9\s]/g, '').trim();
        if (!q) return null;

        var bestMatch = null;
        var bestScore = 0;

        for (var i = 0; i < KB.length; i++) {
            var entry = KB[i];
            for (var j = 0; j < entry.keys.length; j++) {
                var key = entry.keys[j];
                if (q === key || q.indexOf(key) !== -1 || key.indexOf(q) !== -1) {
                    var score = key.length;
                    if (q === key) score += 100;
                    if (score > bestScore) {
                        bestScore = score;
                        bestMatch = entry;
                    }
                }
            }
        }

        /* word-level partial matching as fallback */
        if (!bestMatch) {
            var words = q.split(/\s+/);
            var minMatches = words.length > 2 ? 2 : 1;
            for (var i = 0; i < KB.length; i++) {
                var entry = KB[i];
                var matchCount = 0;
                for (var w = 0; w < words.length; w++) {
                    if (words[w].length < 4) continue;
                    for (var j = 0; j < entry.keys.length; j++) {
                        if (entry.keys[j] === words[w] || entry.keys[j].indexOf(words[w]) !== -1) {
                            matchCount++;
                            break;
                        }
                    }
                }
                if (matchCount >= minMatches && matchCount > bestScore) {
                    bestScore = matchCount;
                    bestMatch = entry;
                }
            }
        }

        return bestMatch ? bestMatch.answer : null;
    }

    var fallbacks = [
        "I'm not sure about that, but you can always reach our team at <a href=\"mailto:cricketpei@gmail.com\">cricketpei@gmail.com</a> or call <a href=\"tel:9023147644\">902-314-7644</a>.",
        "Great question! I don't have that info handy. Try emailing <a href=\"mailto:cricketpei@gmail.com\">cricketpei@gmail.com</a> for a quick answer.",
        "Hmm, I'm not sure about that one. You can contact Cricket PEI at <a href=\"tel:9023147644\">902-314-7644</a> for details!"
    ];
    var fallbackIndex = 0;

    function getFallback() {
        var msg = fallbacks[fallbackIndex];
        fallbackIndex = (fallbackIndex + 1) % fallbacks.length;
        return msg;
    }

    /* ── DOM Creation ──────────────────────────────────────── */
    function buildChatbot() {
        /* Toggle button */
        var toggle = document.createElement('button');
        toggle.id = 'cpei-chatbot-toggle';
        toggle.setAttribute('aria-label', 'Open chat');
        toggle.innerHTML =
            '<span class="cpei-badge">1</span>' +
            '<svg class="chat-icon" viewBox="0 0 24 24"><path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H5.2L4 17.2V4h16v12z"/></svg>' +
            '<svg class="close-icon" viewBox="0 0 24 24"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></svg>';

        /* Chat window */
        var win = document.createElement('div');
        win.id = 'cpei-chatbot-window';
        win.innerHTML =
            '<div class="cpei-chat-header">' +
                '<div class="cpei-chat-header-avatar"><i class="fa-solid fa-baseball"></i></div>' +
                '<div class="cpei-chat-header-info"><h3>Cricket PEI</h3><p>Ask me anything about cricket on PEI</p></div>' +
            '</div>' +
            '<div class="cpei-chat-messages" id="cpei-messages"></div>' +
            '<div class="cpei-quick-replies" id="cpei-quick-replies"></div>' +
            '<div class="cpei-chat-input-area">' +
                '<input type="text" id="cpei-input" placeholder="Type your question..." autocomplete="off">' +
                '<button id="cpei-send" aria-label="Send message"><svg viewBox="0 0 24 24"><path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/></svg></button>' +
            '</div>';

        document.body.appendChild(toggle);
        document.body.appendChild(win);

        var messages = document.getElementById('cpei-messages');
        var input = document.getElementById('cpei-input');
        var sendBtn = document.getElementById('cpei-send');
        var qrContainer = document.getElementById('cpei-quick-replies');
        var isOpen = false;

        /* ── Helpers ─────────────────────────────────── */
        function addMessage(html, sender) {
            var div = document.createElement('div');
            div.className = 'cpei-msg ' + sender;
            div.innerHTML = html;
            messages.appendChild(div);
            messages.scrollTop = messages.scrollHeight;
        }

        function showTyping() {
            var el = document.createElement('div');
            el.className = 'cpei-typing';
            el.id = 'cpei-typing';
            el.innerHTML = '<span></span><span></span><span></span>';
            messages.appendChild(el);
            messages.scrollTop = messages.scrollHeight;
        }

        function hideTyping() {
            var el = document.getElementById('cpei-typing');
            if (el) el.remove();
        }

        function renderQuickReplies() {
            qrContainer.innerHTML = '';
            for (var i = 0; i < quickReplies.length; i++) {
                var btn = document.createElement('button');
                btn.className = 'cpei-quick-btn';
                btn.textContent = quickReplies[i];
                btn.addEventListener('click', (function (text) {
                    return function () { handleSend(text); };
                })(quickReplies[i]));
                qrContainer.appendChild(btn);
            }
        }

        function handleSend(text) {
            var msg = (text || input.value || '').trim();
            if (!msg) return;

            addMessage(msg, 'user');
            input.value = '';
            qrContainer.innerHTML = '';

            showTyping();

            var delay = 400 + Math.random() * 600;
            setTimeout(function () {
                hideTyping();
                var answer = findAnswer(msg) || getFallback();
                addMessage(answer, 'bot');
                renderQuickReplies();
            }, delay);
        }

        /* ── Events ──────────────────────────────────── */
        toggle.addEventListener('click', function () {
            isOpen = !isOpen;
            win.classList.toggle('visible', isOpen);
            toggle.classList.toggle('open', isOpen);
            toggle.setAttribute('aria-label', isOpen ? 'Close chat' : 'Open chat');

            /* Remove badge after first open */
            var badge = toggle.querySelector('.cpei-badge');
            if (badge) badge.remove();

            if (isOpen) {
                input.focus();
                /* Show welcome on first open */
                if (messages.children.length === 0) {
                    addMessage("Hi! I'm the Cricket PEI assistant. Ask me about registration, schedules, programs, or anything about cricket on the Island!", 'bot');
                    renderQuickReplies();
                }
            }
        });

        sendBtn.addEventListener('click', function () { handleSend(); });

        input.addEventListener('keydown', function (e) {
            if (e.key === 'Enter') {
                e.preventDefault();
                handleSend();
            }
        });

        /* Close on Escape */
        document.addEventListener('keydown', function (e) {
            if (e.key === 'Escape' && isOpen) {
                toggle.click();
            }
        });
    }

    /* ── Init ──────────────────────────────────────────────── */
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', buildChatbot);
    } else {
        buildChatbot();
    }
})();
