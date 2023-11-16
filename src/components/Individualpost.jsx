import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

function fetchPostDetails(postId) {
  return fetch(`https://boolean-api-server.fly.dev/SukunimetonVinod/post/${postId}`)
    .then(response => {
      if (!response.ok) {
        throw new Error(`Failed to fetch post details. Status: ${response.status}`);
      }
      return response.json();
    
        /*comment-li">
            <div className="title-container">
           
                </div>
              ))}
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}
